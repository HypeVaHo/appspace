"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Star, Search, Users, Mail, Phone, Rocket, Heart } from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  const competitions = [
    {
      id: 1,
      title: "Космическая семейная фотосессия",
      description: "Создайте незабываемые семейные фотографии в космическом стиле",
      image: "/family-space-photoshoot-cosmic-background.jpg",
      rating: 4.8,
      participants: 45,
    },
    {
      id: 2,
      title: "Строительство ракеты из подручных материалов",
      description: "Семейный конкурс по созданию космических кораблей",
      image: "/family-building-rocket-craft-materials.jpg",
      rating: 4.9,
      participants: 32,
    },
    {
      id: 3,
      title: "Космическая кулинария",
      description: "Готовим блюда, достойные космонавтов",
      image: "/space-themed-cooking-family-kitchen.jpg",
      rating: 4.7,
      participants: 28,
    },
  ]

  const reviews = [
    {
      id: 1,
      author: "Анна Петрова",
      text: "Потрясающее мероприятие! Дети были в восторге от космических конкурсов.",
      date: "15 июня 2024",
      photo: "/smiling-woman-portrait.png",
    },
    {
      id: 2,
      author: "Михаил Сидоров",
      text: "Отличная организация, много интересных активностей для всей семьи.",
      date: "10 июня 2024",
      photo: "/smiling-man-portrait.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-balance">Моя семья - мой космос</h1>
                <p className="text-sm text-muted-foreground">Семейный праздник в Калуге</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#auth" className="text-foreground hover:text-primary transition-colors">
                Авторизация
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#competitions" className="text-foreground hover:text-primary transition-colors">
                Конкурсы
              </a>
              <a href="#search" className="text-foreground hover:text-primary transition-colors">
                Поиск
              </a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <Button variant="outline" size="sm">
                <a href="/registration.html">Регистрация</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/account.html">Личный кабинет</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="relative">
            <Card className="overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={competitions[currentSlide].image || "/placeholder.svg"}
                  alt={competitions[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(competitions[currentSlide].rating) ? "text-primary fill-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground">({competitions[currentSlide].rating})</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">
                    {competitions[currentSlide].title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-pretty">{competitions[currentSlide].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">
                        <Users className="w-4 h-4 mr-1" />
                        {competitions[currentSlide].participants} участников
                      </Badge>
                    </div>
                    <Button>
                      <a href="/competition.html">Подробнее</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Slider indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {competitions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section id="auth" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Вход в систему</CardTitle>
              <CardDescription className="text-center">
                Войдите в свой аккаунт для участия в мероприятиях
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Войти</Button>
              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">
                  Забыли пароль?
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">О нашем мероприятии</h2>
              <div className="space-y-4 text-pretty">
                <p>
                  2024 год объявлен в России Годом семьи. Город Калуга, пронизанный космической тематикой, стал
                  идеальным местом для организации уникального семейного праздника.
                </p>
                <p>
                  Наше мероприятие "Моя семья - мой космос" объединяет семьи через увлекательные космические
                  приключения, конкурсы и активности, которые создают незабываемые воспоминания.
                </p>
                <p>
                  Мы верим, что семья - это наша личная вселенная, где каждый член семьи - это звезда, которая делает
                  нашу жизнь ярче и полнее.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/happy-family-space-theme-cosmic-background.jpg"
                alt="Семья в космическом стиле"
                className="rounded-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Greeting */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-balance">Приветствие от организаторов</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Heart className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">Видеоприветствие загружается...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Grid */}
      <section id="competitions" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Наши конкурсы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((competition) => (
              <Card key={competition.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={competition.image || "/placeholder.svg"}
                    alt={competition.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(competition.rating) ? "text-primary fill-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground">({competition.rating})</span>
                  </div>
                  <h3 className="font-bold mb-2 text-balance">{competition.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{competition.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      <Users className="w-4 h-4 mr-1" />
                      {competition.participants}
                    </Badge>
                    <Button size="sm">
                      <a href="/competition.html">Записаться</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-balance">Поиск конкурсов</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Найти конкурс по названию или описанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
          <Button className="mt-4">Поиск</Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">Отзывы участников</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={review.photo || "/placeholder.svg"}
                      alt={review.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{review.author}</h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-pretty">"{review.text}"</p>
                  <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                    <a href="/competition.html">Подробнее о конкурсе</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-balance">Подписка на новости</h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                Будьте в курсе всех новостей и обновлений о нашем мероприятии
              </p>
              <div className="space-y-4">
                <Input type="email" placeholder="Ваш email адрес" className="text-center" />
                <div className="flex items-center justify-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded" />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    Согласие на обработку персональных данных
                  </label>
                </div>
                <Button className="w-full">Подписаться</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="border-t border-border/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold">Моя семья - мой космос</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Семейный праздник с космической тематикой в городе Калуга
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+74842234567" className="text-muted-foreground hover:text-primary">
                    +7 (4842) 23-45-67
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:family@cosmos.ru" className="text-muted-foreground hover:text-primary">
                    family@cosmos.ru
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="/index.html" className="text-muted-foreground hover:text-primary">
                  Главная
                </a>
                <a href="/index-light.html" className="text-muted-foreground hover:text-primary">
                  Главная-светлая
                </a>
                <a href="/registration.html" className="text-muted-foreground hover:text-primary">
                  Регистрация
                </a>
                <a href="/competition.html" className="text-muted-foreground hover:text-primary">
                  Конкурс
                </a>
                <a href="/account.html" className="text-muted-foreground hover:text-primary">
                  Личный кабинет
                </a>
                <a href="/404.html" className="text-muted-foreground hover:text-primary">
                  Страница не найдена
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Моя семья - мой космос. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
