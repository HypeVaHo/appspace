"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Rocket, User, Calendar, Clock, Users, LogOut, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AccountPage() {
  const [formData, setFormData] = useState({
    competition: "",
    date: "2024-07-08",
    time: "",
    participants: "1",
  })

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const competitions = [
    "Космическая семейная фотосессия",
    "Строительство ракеты из подручных материалов",
    "Космическая кулинария",
    "Планетарий для всей семьи",
    "Космические загадки и викторины",
  ]

  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 9
    return `${hour}:00-${hour + 1}:00`
  })

  // Mock user registrations
  const userRegistrations = [
    {
      id: 1,
      competition: "Космическая семейная фотосессия",
      date: "2024-07-08",
      time: "14:00-15:00",
      participants: 4,
      status: "confirmed",
    },
    {
      id: 2,
      competition: "Космическая кулинария",
      date: "2024-07-08",
      time: "16:00-17:00",
      participants: 3,
      status: "pending",
    },
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.competition) newErrors.competition = "Выберите конкурс"
    if (!formData.time) newErrors.time = "Выберите время"
    if (!formData.participants || Number(formData.participants) < 1) {
      newErrors.participants = "Укажите количество участников"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmitStatus("success")
      setTimeout(() => setSubmitStatus("idle"), 3000)
      // Reset form
      setFormData({
        competition: "",
        date: "2024-07-08",
        time: "",
        participants: "1",
      })
    } else {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  const handleLogout = () => {
    // Redirect to main page
    window.location.href = "/index.html"
  }

  return (
    <div className="min-h-screen space-bg">
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
                <p className="text-sm text-muted-foreground">Личный кабинет</p>
              </div>
            </div>

            <nav className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <a href="/index.html">На главную</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/schedule.html">Расписание</a>
              </Button>
              <Button variant="destructive" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1" />
                Выйти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Добро пожаловать, Анна!</h2>
                  <p className="text-muted-foreground">Управляйте своими записями на конкурсы</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Registration Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Запись на конкурс</span>
                  </CardTitle>
                  <CardDescription>Выберите конкурс и время для участия</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <Alert className="mb-4 border-green-500 bg-green-50 text-green-800">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>Запись на конкурс успешно оформлена!</AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="mb-4 border-red-500 bg-red-50 text-red-800">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>Пожалуйста, заполните все обязательные поля.</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="competition">Конкурс *</Label>
                      <Select
                        value={formData.competition}
                        onValueChange={(value) => setFormData({ ...formData, competition: value })}
                      >
                        <SelectTrigger className={errors.competition ? "border-red-500" : ""}>
                          <SelectValue placeholder="Выберите конкурс" />
                        </SelectTrigger>
                        <SelectContent>
                          {competitions.map((competition) => (
                            <SelectItem key={competition} value={competition}>
                              {competition}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.competition && <p className="text-sm text-red-500">{errors.competition}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        min="2024-07-08"
                        max="2024-07-08"
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="cursor-not-allowed"
                        readOnly
                      />
                      <p className="text-xs text-muted-foreground">Доступна только дата: 8 июля 2024г.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Время *</Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => setFormData({ ...formData, time: value })}
                      >
                        <SelectTrigger className={errors.time ? "border-red-500" : ""}>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && <p className="text-sm text-red-500">{errors.time}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="participants">Количество участников *</Label>
                      <Select
                        value={formData.participants}
                        onValueChange={(value) => setFormData({ ...formData, participants: value })}
                      >
                        <SelectTrigger className={errors.participants ? "border-red-500" : ""}>
                          <SelectValue placeholder="Выберите количество" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "человек" : num < 5 ? "человека" : "человек"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.participants && <p className="text-sm text-red-500">{errors.participants}</p>}
                    </div>

                    <Button type="submit" className="w-full">
                      Записаться на конкурс
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Current Registrations */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Мои записи</span>
                  </CardTitle>
                  <CardDescription>Ваши текущие записи на конкурсы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userRegistrations.length === 0 ? (
                      <div className="text-center py-8">
                        <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">У вас пока нет записей на конкурсы</p>
                      </div>
                    ) : (
                      userRegistrations.map((registration) => (
                        <Card key={registration.id} className="border-border/50">
                          <CardContent className="pt-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm text-balance mb-2">{registration.competition}</h4>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>8 июля 2024</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{registration.time}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Users className="w-4 h-4" />
                                    <span>{registration.participants} участников</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end space-y-2">
                                <Badge
                                  variant={registration.status === "confirmed" ? "default" : "secondary"}
                                  className={registration.status === "confirmed" ? "bg-green-500" : ""}
                                >
                                  {registration.status === "confirmed" ? "Подтверждено" : "Ожидание"}
                                </Badge>
                                <Button variant="outline" size="sm">
                                  Отменить
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardContent className="pt-4 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">Активные записи</p>
                    <p className="text-xl font-bold text-primary">{userRegistrations.length}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4 text-center">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">Участников</p>
                    <p className="text-xl font-bold text-secondary-foreground">
                      {userRegistrations.reduce((sum, reg) => sum + reg.participants, 0)}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Нужна помощь?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Как записаться на конкурс?</h4>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Выберите интересующий вас конкурс, укажите удобное время и количество участников. После
                    подтверждения вы получите уведомление на email.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Можно ли изменить запись?</h4>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Да, вы можете отменить запись и создать новую. Изменения возможны не позднее чем за 2 часа до начала
                    конкурса.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 mt-16">
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
    </div>
  )
}
