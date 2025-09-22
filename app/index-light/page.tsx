"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Star, Search, Users, Mail, Phone, Rocket, Heart, Sun } from "lucide-react"

export default function LightHomePage() {
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-balance text-gray-900">Моя семья - мой космос</h1>
                <p className="text-sm text-gray-600">Семейный праздник в Калуге</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#auth" className="text-gray-700 hover:text-orange-500 transition-colors">
                Авторизация
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">
                О нас
              </a>
              <a href="#competitions" className="text-gray-700 hover:text-orange-500 transition-colors">
                Конкурсы
              </a>
              <a href="#search" className="text-gray-700 hover:text-orange-500 transition-colors">
                Поиск
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">
                Контакты
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
              >
                <a href="/registration.html">Регистрация</a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
              >
                <a href="/account.html">Личный кабинет</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-orange-500">
                <Sun className="w-4 h-4 mr-1" />
                Светлая тема
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="relative">
            <Card className="overflow-hidden border-gray-200 shadow-lg">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={competitions[currentSlide].image || "/placeholder.svg"}
                  alt={competitions[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(competitions[currentSlide].rating) ? "text-orange-400 fill-orange-400" : "text-gray-400"}`}
                      />
                    ))}
                    <span className="text-sm text-white/80">({competitions[currentSlide].rating})</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance text-white">
                    {competitions[currentSlide].title}
                  </h2>
                  <p className="text-white/90 mb-4 text-pretty">{competitions[currentSlide].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        <Users className="w-4 h-4 mr-1" />
                        {competitions[currentSlide].participants} участников
                      </Badge>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
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
                    index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section id="auth" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-md">
          <Card className="border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-gray-900">Вход в систему</CardTitle>
              <CardDescription className="text-center text-gray-600">
                Войдите в свой аккаунт для участия в мероприятиях
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="your@email.com" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Пароль
                </Label>
                <Input id="password" type="password" placeholder="••••••••" className="border-gray-300" />
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Войти</Button>
              <div className="text-center">
                <a href="#" className="text-sm text-orange-500 hover:underline">
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
              <h2 className="text-3xl font-bold mb-6 text-balance text-gray-900">О нашем мероприятии</h2>
              <div className="space-y-4 text-pretty text-gray-700">
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
                className="rounded-lg shadow-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Greeting */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-balance text-gray-900">Приветствие от организаторов</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600">Видеоприветствие загружается...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Grid */}
      <section id="competitions" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance text-gray-900">Наши конкурсы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((competition) => (
              <Card key={competition.id} className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200">
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
                        className={`w-4 h-4 ${i < Math.floor(competition.rating) ? "text-orange-400 fill-orange-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600">({competition.rating})</span>
                  </div>
                  <h3 className="font-bold mb-2 text-balance text-gray-900">{competition.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-pretty">{competition.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gray-100 text-gray-700 border-gray-300">
                      <Users className="w-4 h-4 mr-1" />
                      {competition.participants}
                    </Badge>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
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
      <section id="search" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-balance text-gray-900">Поиск конкурсов</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Найти конкурс по названию или описанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg border-gray-300"
            />
          </div>
          <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">Поиск</Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance text-gray-900">Отзывы участников</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={review.photo || "/placeholder.svg"}
                      alt={review.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.author}</h4>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-pretty text-gray-700">"{review.text}"</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                  >
                    <a href="/competition.html">Подробнее о конкурсе</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-balance text-gray-900">Подписка на новости</h2>
              <p className="text-gray-600 mb-6 text-pretty">
                Будьте в курсе всех новостей и обновлений о нашем мероприятии
              </p>
              <div className="space-y-4">
                <Input type="email" placeholder="Ваш email адрес" className="text-center border-gray-300" />
                <div className="flex items-center justify-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Согласие на обработку персональных данных
                  </label>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Подписаться</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="border-t border-gray-200 py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">Моя семья - мой космос</span>
              </div>
              <p className="text-gray-600 text-pretty">Семейный праздник с космической тематикой в городе Калуга</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <a href="tel:+74842234567" className="text-gray-600 hover:text-orange-500">
                    +7 (4842) 23-45-67
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <a href="mailto:family@cosmos.ru" className="text-gray-600 hover:text-orange-500">
                    family@cosmos.ru
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Навигация</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="/index.html" className="text-gray-600 hover:text-orange-500">
                  Главная
                </a>
                <a href="/index-light.html" className="text-gray-600 hover:text-orange-500">
                  Главная-светлая
                </a>
                <a href="/registration.html" className="text-gray-600 hover:text-orange-500">
                  Регистрация
                </a>
                <a href="/competition.html" className="text-gray-600 hover:text-orange-500">
                  Конкурс
                </a>
                <a href="/account.html" className="text-gray-600 hover:text-orange-500">
                  Личный кабинет
                </a>
                <a href="/404.html" className="text-gray-600 hover:text-orange-500">
                  Страница не найдена
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Моя семья - мой космос. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
