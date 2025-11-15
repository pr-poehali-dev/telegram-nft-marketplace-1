import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const nftGifts = [
  {
    id: 1,
    name: 'Звёздный Подарок',
    price: '500 ⭐',
    image: 'https://cdn.poehali.dev/projects/0563fced-2450-4016-b2f9-fa5079b34096/files/40032d6c-f5c4-4b5f-9742-e1f45fd168b9.jpg',
    rating: 4.8,
    reviews: 234,
    category: 'Популярное',
    rarity: 'Эпический',
    trending: true
  },
  {
    id: 2,
    name: 'Кристалл Удачи',
    price: '1200 ⭐',
    image: 'https://cdn.poehali.dev/projects/0563fced-2450-4016-b2f9-fa5079b34096/files/88b26d31-adc7-4586-8fe5-7db9bf4c87da.jpg',
    rating: 4.9,
    reviews: 567,
    category: 'Топ',
    rarity: 'Легендарный',
    trending: true
  },
  {
    id: 3,
    name: 'Премиум Значок',
    price: '800 ⭐',
    image: 'https://cdn.poehali.dev/projects/0563fced-2450-4016-b2f9-fa5079b34096/files/ebcf6b0a-eb81-417b-8dfc-277a638af034.jpg',
    rating: 4.7,
    reviews: 189,
    category: 'Коллекции',
    rarity: 'Редкий',
    trending: false
  },
  {
    id: 4,
    name: 'Магический Куб',
    price: '350 ⭐',
    image: 'https://cdn.poehali.dev/projects/0563fced-2450-4016-b2f9-fa5079b34096/files/40032d6c-f5c4-4b5f-9742-e1f45fd168b9.jpg',
    rating: 4.6,
    reviews: 412,
    category: 'Популярное',
    rarity: 'Обычный',
    trending: false
  },
  {
    id: 5,
    name: 'Золотой Трофей',
    price: '2000 ⭐',
    image: 'https://cdn.poehali.dev/projects/0563fced-2450-4016-b2f9-fa5079b34096/files/88b26d31-adc7-4586-8fe5-7db9bf4c87da.jpg',
    rating: 5.0,
    reviews: 892,
    category: 'Топ',
    rarity: 'Мифический',
    trending: true
  },
  {
    id: 6,
    name: 'Неоновая Звезда',
    price: '650 ⭐',
    image: 'https://cdn.poehali.dev/projects/0563fced-2450-4016-b2f9-fa5079b34096/files/ebcf6b0a-eb81-417b-8dfc-277a638af034.jpg',
    rating: 4.7,
    reviews: 301,
    category: 'Коллекции',
    rarity: 'Редкий',
    trending: false
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredGifts = selectedCategory === 'Все' 
    ? nftGifts 
    : nftGifts.filter(gift => gift.category === selectedCategory);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Мифический': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Легендарный': return 'bg-gradient-to-r from-orange-500 to-yellow-500';
      case 'Эпический': return 'bg-gradient-to-r from-purple-500 to-blue-500';
      case 'Редкий': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-purple-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="text-4xl">🎁</div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  NFT Подарки
                </h1>
                <p className="text-xs text-muted-foreground">Telegram Marketplace</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="hover-scale">
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="hover-scale">
                <Icon name="Grid2x2" size={18} className="mr-2" />
                Каталог
              </Button>
              <Button variant="ghost" className="hover-scale">
                <Icon name="TrendingUp" size={18} className="mr-2" />
                Топ
              </Button>
              <Button variant="ghost" className="hover-scale">
                <Icon name="Layers" size={18} className="mr-2" />
                Коллекции
              </Button>
              <Button variant="ghost" className="hover-scale">
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
              <Button variant="ghost" className="hover-scale">
                <Icon name="HelpCircle" size={18} className="mr-2" />
                Помощь
              </Button>
            </nav>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 animate-glow">
              <Icon name="Send" size={18} className="mr-2" />
              Отправить подарок
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-scale-in">
              Подари NFT в Telegram
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксклюзивные цифровые подарки для твоих друзей. Коллекционируй, дари и получай!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-all hover-scale bg-gradient-to-br from-white to-purple-50">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Мгновенная отправка</h3>
              <p className="text-muted-foreground">Отправляй подарки прямо в Telegram за секунды</p>
            </Card>
            
            <Card className="p-6 border-2 border-pink-200 hover:border-pink-400 transition-all hover-scale bg-gradient-to-br from-white to-pink-50">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Рейтинг и отзывы</h3>
              <p className="text-muted-foreground">Смотри что дарят другие и делись впечатлениями</p>
            </Card>
            
            <Card className="p-6 border-2 border-orange-200 hover:border-orange-400 transition-all hover-scale bg-gradient-to-br from-white to-orange-50">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Анимированный превью</h3>
              <p className="text-muted-foreground">Оцени NFT с анимацией перед покупкой</p>
            </Card>
          </div>
        </section>

        <section>
          <Tabs defaultValue="Все" className="w-full" onValueChange={setSelectedCategory}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold">Популярные подарки</h3>
              <TabsList className="bg-white/50 backdrop-blur-sm">
                <TabsTrigger value="Все">Все</TabsTrigger>
                <TabsTrigger value="Топ">Топ</TabsTrigger>
                <TabsTrigger value="Популярное">Популярное</TabsTrigger>
                <TabsTrigger value="Коллекции">Коллекции</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGifts.map((gift, index) => (
                  <Card 
                    key={gift.id}
                    className="group overflow-hidden border-2 border-transparent hover:border-purple-400 transition-all cursor-pointer animate-fade-in hover-scale bg-white/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredCard(gift.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative overflow-hidden">
                      {gift.trending && (
                        <Badge className="absolute top-3 right-3 z-10 bg-gradient-to-r from-orange-500 to-pink-500 animate-glow">
                          <Icon name="TrendingUp" size={12} className="mr-1" />
                          Trending
                        </Badge>
                      )}
                      
                      <div className={`absolute top-3 left-3 z-10 ${getRarityColor(gift.rarity)} text-white text-xs px-3 py-1 rounded-full font-bold`}>
                        {gift.rarity}
                      </div>

                      <div className={`aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 transition-transform duration-300 ${hoveredCard === gift.id ? 'scale-110' : 'scale-100'}`}>
                        <img 
                          src={gift.image} 
                          alt={gift.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="text-xl font-bold mb-2">{gift.name}</h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{gift.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({gift.reviews} отзывов)
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {gift.price}
                        </div>
                        
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-1" />
                          Купить
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mt-20 text-center">
          <Card className="p-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white border-0">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6 animate-float">🎉</div>
              <h3 className="text-4xl font-black mb-4">Начни дарить прямо сейчас!</h3>
              <p className="text-xl mb-8 opacity-90">
                Присоединяйся к тысячам пользователей, которые уже дарят NFT-подарки в Telegram
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Открыть в Telegram
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <footer className="mt-20 py-12 border-t border-purple-200/50 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🎁</div>
                <span className="font-bold text-lg">NFT Подарки</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Первый маркетплейс NFT-подарков для Telegram
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Главная</li>
                <li>Каталог</li>
                <li>Топ</li>
                <li>Коллекции</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>FAQ</li>
                <li>Поддержка</li>
                <li>Как отправить</li>
                <li>Отзывы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover-scale">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover-scale">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover-scale">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-200/50 text-center text-sm text-muted-foreground">
            © 2024 NFT Подарки. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
