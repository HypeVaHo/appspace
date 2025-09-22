"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Star, Users, Calendar, Clock, Award, Heart, Share2 } from "lucide-react"

export default function CompetitionPage() {
  const competition = {
    title: "Космическая семейная фотосессия",
    description: `Погрузитесь в удивительный мир космоса вместе со своей семьей! Наш конкурс "Космическая семейная фотосессия" предлагает уникальную возможность создать незабываемые семейные фотографии в космическом стиле.

    В рамках конкурса каждая семья получит доступ к профессиональной фотостудии, оформленной в космической тематике. Вас ждут:
    
    • Профессиональные костюмы космонавтов для всех членов семьи
    • Декорации космических кораблей и планет
    • Специальные световые эффекты, имитирующие звездное небо
    • Работа с опытным фотографом, специализирующимся на семейной съемке
    
    Конкурс проводится в несколько этапов. Сначала каждая семья проходит 30-минутную фотосессию, во время которой создается серия уникальных снимков. Затем профессиональное жюри оценивает работы по критериям креативности, семейной гармонии и соответствия космической тематике.
    
    Победители получат не только профессиональные фотографии, но и ценные призы, включая семейные путевки в планетарий и сувениры с космической тематикой.`,
    image: "/family-space-photoshoot-cosmic-background.jpg",
    rating: 4.8,
    participants: 45,
    maxParticipants: 60,
    duration: "45 минут",
    ageLimit: "Для всех возрастов",
    prizes: [
      "Профессиональные фотографии (20 шт.)",
      "Семейная путевка в планетарий",
      "Набор космических сувениров",
      "Диплом участника",
    ],
  }

  const reviews = [
    {
      id: 1,
      author: "Семья Петровых",
      text: "Потрясающий опыт! Дети были в восторге от костюмов космонавтов, а фотографии получились просто волшебными. Профессиональный фотограф сумел поймать самые искренние эмоции нашей семьи.",
      rating: 5,
      date: "15 июня 2024",
    },
    {
      id: 2,
      author: "Анна и Михаил Сидоровы",
      text: "Организация на высшем уровне! Декорации выглядят как настоящий космический корабль. Наш 5-летний сын до сих пор рассказывает друзьям, что он был настоящим космонавтом.",
      rating: 5,
      date: "12 июня 2024",
    },
  ]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen space-bg">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50 print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-balance">Моя семья - мой космос</h1>
                <p className="text-sm text-muted-foreground">Описание конкурса</p>
              </div>
            </div>

            <nav className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <a href="/index.html">На главную</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/schedule.html">Расписание</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/account.html">Записаться</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <Card className="overflow-hidden mb-8">
            <div className="relative h-64 md:h-96">
              <img
                src={competition.image || "/placeholder.svg"}
                alt={competition.title}
                className="w-full h-full object-cover print:filter print:grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent print:hidden" />
              <div className="absolute bottom-0 left-0 right-0 p-6 print:hidden">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(competition.rating) ? "text-primary fill-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">({competition.rating})</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-balance text-white">{competition.title}</h1>
              </div>
            </div>
          </Card>

          {/* Print-only title */}
          <div className="hidden print:block mb-8">
            <h1 className="text-3xl font-bold text-center mb-4">{competition.title}</h1>
            <div className="w-full h-64 mb-6">
              <img
                src={competition.image || "/placeholder.svg"}
                alt={competition.title}
                className="w-full h-full object-cover filter grayscale rounded-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="print:text-2xl">Описание конкурса</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-pretty">
                    {competition.description.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews Section - Hidden in print */}
              <Card className="print:hidden">
                <CardHeader>
                  <CardTitle>Отзывы участников</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-l-4 border-primary pl-4">
                        <div className="flex items-center space-x-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground">• {review.author}</span>
                        </div>
                        <p className="text-sm text-pretty mb-2">"{review.text}"</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Print-only review */}
              <div className="hidden print:block mt-8 p-6 border border-gray-300 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Отзыв участника</h3>
                <div className="border-l-4 border-gray-400 pl-4">
                  <p className="text-sm mb-2">"{reviews[0].text}"</p>
                  <p className="text-xs text-gray-600">
                    — {reviews[0].author}, {reviews[0].date}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Competition Stats */}
              <Card className="print:hidden">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Информация</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Рейтинг</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="font-semibold">{competition.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Участников</span>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-semibold">
                        {competition.participants}/{competition.maxParticipants}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Длительность</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold">{competition.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Возраст</span>
                    <span className="font-semibold">{competition.ageLimit}</span>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(competition.participants / competition.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      Заполнено {Math.round((competition.participants / competition.maxParticipants) * 100)}%
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Prizes */}
              <Card className="print:hidden">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Призы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {competition.prizes.map((prize, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-pretty">{prize}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3 print:hidden">
                <Button className="w-full" size="lg">
                  <a href="/account.html" className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Записаться на конкурс</span>
                  </a>
                </Button>

                <Button variant="outline" className="w-full bg-transparent" onClick={handlePrint}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Печать страницы
                </Button>

                <Button variant="outline" className="w-full bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Добавить в избранное
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 mt-16 print:hidden">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Rocket className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold">Моя семья - мой космос</span>
          </div>
          <p className="text-muted-foreground text-sm">&copy; 2024 Семейный праздник в Калуге. Все права защищены.</p>
        </div>
      </footer>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          .print\\:filter {
            filter: grayscale(100%);
          }
          .print\\:grayscale {
            filter: grayscale(100%);
          }
          .print\\:text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          body {
            background: white !important;
            color: black !important;
          }
          * {
            color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  )
}
