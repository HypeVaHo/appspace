"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Rocket, Upload, Plus, Minus, AlertCircle, CheckCircle, User } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
    photo: null as File | null,
    consent: false,
  })

  const [familyMembers, setFamilyMembers] = useState([{ id: 1, firstName: "", lastName: "", age: "", gender: "" }])

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) newErrors.email = "Email обязателен"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Некорректный email"

    if (!formData.firstName) newErrors.firstName = "Имя обязательно"
    if (!formData.lastName) newErrors.lastName = "Фамилия обязательна"
    if (!formData.age) newErrors.age = "Возраст обязателен"
    else if (isNaN(Number(formData.age)) || Number(formData.age) < 1) newErrors.age = "Некорректный возраст"

    if (!formData.gender) newErrors.gender = "Пол обязателен"
    if (!formData.password) newErrors.password = "Пароль обязателен"
    else if (formData.password.length < 6) newErrors.password = "Пароль должен содержать минимум 6 символов"

    if (!formData.confirmPassword) newErrors.confirmPassword = "Подтверждение пароля обязательно"
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Пароли не совпадают"

    if (!formData.photo) newErrors.photo = "Семейная фотография обязательна"
    if (!formData.consent) newErrors.consent = "Согласие на обработку данных обязательно"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmitStatus("success")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } else {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
      },
    ])
  }

  const removeFamilyMember = (id: number) => {
    setFamilyMembers(familyMembers.filter((member) => member.id !== id))
  }

  const updateFamilyMember = (id: number, field: string, value: string) => {
    setFamilyMembers(familyMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
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
                <p className="text-sm text-muted-foreground">Регистрация на мероприятие</p>
              </div>
            </div>

            <nav className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <a href="/index.html">На главную</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-balance">Регистрация на мероприятие</CardTitle>
              <CardDescription className="text-pretty">
                Заполните форму для участия в семейном празднике "Моя семья - мой космос"
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <Alert className="mb-6 border-green-500 bg-green-50 text-green-800">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Регистрация прошла успешно! Добро пожаловать в наше космическое сообщество.
              </AlertDescription>
            </Alert>
          )}

          {submitStatus === "error" && (
            <Alert className="mb-6 border-red-500 bg-red-50 text-red-800">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Пожалуйста, исправьте ошибки в форме и попробуйте снова.</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Личная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Возраст *</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="age"
                        type="number"
                        min="1"
                        max="120"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className={errors.age ? "border-red-500" : ""}
                      />
                      <Select value={formData.age} onValueChange={(value) => setFormData({ ...formData, age: value })}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Выбрать" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
                            <SelectItem key={age} value={age.toString()}>
                              {age}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Пол *</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    >
                      <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                        <SelectValue placeholder="Выберите пол" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Мужской</SelectItem>
                        <SelectItem value="female">Женский</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={errors.password ? "border-red-500" : ""}
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Повтор пароля *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className={errors.confirmPassword ? "border-red-500" : ""}
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Семейная фотография *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Перетащите файл сюда или нажмите для выбора</p>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFormData({ ...formData, photo: e.target.files?.[0] || null })}
                      className="hidden"
                    />
                    <Button type="button" variant="outline" onClick={() => document.getElementById("photo")?.click()}>
                      Выбрать файл
                    </Button>
                    {formData.photo && <p className="text-sm text-primary mt-2">Выбран файл: {formData.photo.name}</p>}
                  </div>
                  {errors.photo && <p className="text-sm text-red-500">{errors.photo}</p>}
                </div>
              </CardContent>
            </Card>

            {/* Family Members */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Члены семьи</CardTitle>
                  <Button type="button" variant="outline" size="sm" onClick={addFamilyMember}>
                    <Plus className="w-4 h-4 mr-1" />
                    Добавить
                  </Button>
                </div>
                <CardDescription>
                  Добавьте информацию о членах вашей семьи, которые будут участвовать в мероприятии
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {familyMembers.map((member, index) => (
                  <div key={member.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">Член семьи {index + 1}</h4>
                      {familyMembers.length > 1 && (
                        <Button type="button" variant="outline" size="sm" onClick={() => removeFamilyMember(member.id)}>
                          <Minus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Имя</Label>
                        <Input
                          value={member.firstName}
                          onChange={(e) => updateFamilyMember(member.id, "firstName", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Фамилия</Label>
                        <Input
                          value={member.lastName}
                          onChange={(e) => updateFamilyMember(member.id, "lastName", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Возраст</Label>
                        <Input
                          type="number"
                          min="1"
                          max="120"
                          value={member.age}
                          onChange={(e) => updateFamilyMember(member.id, "age", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Пол</Label>
                        <Select
                          value={member.gender}
                          onValueChange={(value) => updateFamilyMember(member.id, "gender", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите пол" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Мужской</SelectItem>
                            <SelectItem value="female">Женский</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Consent and Submit */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-pretty">
                      Я согласен(а) на обработку персональных данных в соответствии с политикой конфиденциальности *
                    </label>
                  </div>
                  {errors.consent && <p className="text-sm text-red-500">{errors.consent}</p>}

                  <Button type="submit" className="w-full" size="lg">
                    Зарегистрироваться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
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
