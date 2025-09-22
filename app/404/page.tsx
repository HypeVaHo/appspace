"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Home, Search, Calendar, AlertTriangle } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen space-bg flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-float">
                <Rocket className="w-12 h-12 text-primary-foreground animate-pulse" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <Card className="mb-8">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Встреча не найдена</h1>

              <p className="text-muted-foreground text-lg mb-6 text-pretty">
                К сожалению, запрашиваемая страница не существует или была перемещена. Возможно, вы перешли по
                устаревшей ссылке или ввели неверный адрес.
              </p>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Но не расстраивайтесь! Наше космическое путешествие продолжается.
                </p>

                {/* Animated Stars */}
                <div className="flex justify-center space-x-2 my-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-star-twinkle"></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-star-twinkle"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-star-twinkle"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Options */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Главная страница</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  Вернитесь на главную страницу и узнайте о наших космических мероприятиях
                </p>
                <Button className="w-full">
                  <a href="/index.html">На главную</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Расписание</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  Посмотрите расписание конкурсов и выберите подходящее время
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <a href="/schedule.html">Расписание</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <Card>
            <CardContent className="pt-6 pb-6">
              <h3 className="font-semibold mb-4 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Быстрые ссылки</span>
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="ghost" size="sm">
                  <a href="/index.html">Главная</a>
                </Button>
                <Button variant="ghost" size="sm">
                  <a href="/registration.html">Регистрация</a>
                </Button>
                <Button variant="ghost" size="sm">
                  <a href="/schedule.html">Расписание</a>
                </Button>
                <Button variant="ghost" size="sm">
                  <a href="/account.html">Личный кабинет</a>
                </Button>
                <Button variant="ghost" size="sm">
                  <a href="/competition.html">Конкурсы</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">Если проблема повторяется, свяжитесь с нами:</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="tel:+74842234567" className="text-primary hover:underline">
                +7 (4842) 23-45-67
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="mailto:family@cosmos.ru" className="text-primary hover:underline">
                family@cosmos.ru
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="fixed top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="fixed top-40 right-20 w-3 h-3 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="fixed bottom-32 left-20 w-2 h-2 bg-primary/40 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="fixed bottom-20 right-10 w-5 h-5 bg-primary/25 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  )
}
