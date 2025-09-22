"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Calendar, Clock, Users, CheckCircle, XCircle } from "lucide-react"

export default function SchedulePage() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  // Competition names from the technical specification
  const competitions = [
    "Космическая семейная фотосессия",
    "Строительство ракеты из подручных материалов",
    "Космическая кулинария",
    "Планетарий для всей семьи",
    "Космические загадки и викторины",
  ]

  // Time slots from 9 to 21 hours
  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 9
    return `${hour}:00-${hour + 1}:00`
  })

  // Generate schedule data with available spots
  const generateScheduleData = () => {
    const data: Record<string, Record<string, number>> = {}

    competitions.forEach((competition) => {
      data[competition] = {}
      timeSlots.forEach((slot) => {
        // Random number of available spots (0-15, with some slots being full)
        const spots = Math.floor(Math.random() * 16)
        data[competition][slot] = spots
      })
    })

    return data
  }

  const [scheduleData] = useState(generateScheduleData())

  const getSlotStatus = (spots: number) => {
    if (spots === 0) return { status: "full", color: "bg-red-500", textColor: "text-white" }
    if (spots <= 3) return { status: "limited", color: "bg-yellow-500", textColor: "text-white" }
    return { status: "available", color: "bg-green-500", textColor: "text-white" }
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
                <p className="text-sm text-muted-foreground">Расписание конкурсов</p>
              </div>
            </div>

            <nav className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <a href="/index.html">На главную</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/account.html">Личный кабинет</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <Calendar className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-balance">Расписание конкурсов</h1>
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
            Выберите удобное время для участия в конкурсах. Количество мест ограничено!
          </p>
        </div>

        {/* Legend */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Обозначения</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <span className="text-sm">Много мест (4+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                <span className="text-sm">Мало мест (1-3)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded"></div>
                <span className="text-sm">Мест нет</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Table */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Расписание на 8 июля 2024</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold min-w-[200px] sticky left-0 bg-background border-r border-border">
                      Конкурс
                    </th>
                    {timeSlots.map((slot) => (
                      <th key={slot} className="text-center p-2 font-semibold min-w-[80px] text-sm">
                        {slot}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competitions.map((competition, competitionIndex) => (
                    <tr key={competition} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 font-medium sticky left-0 bg-background border-r border-border">
                        <div className="text-sm text-balance">{competition}</div>
                      </td>
                      {timeSlots.map((slot) => {
                        const spots = scheduleData[competition][slot]
                        const slotInfo = getSlotStatus(spots)
                        const slotId = `${competition}-${slot}`

                        return (
                          <td key={slot} className="p-1">
                            <button
                              onClick={() => setSelectedSlot(slotId)}
                              className={`
                                w-16 h-16 rounded-lg flex flex-col items-center justify-center text-xs font-semibold
                                transition-all duration-200 hover:scale-105 hover:shadow-lg
                                ${slotInfo.color} ${slotInfo.textColor}
                                ${selectedSlot === slotId ? "ring-2 ring-primary ring-offset-2" : ""}
                                ${spots === 0 ? "cursor-not-allowed opacity-75" : "cursor-pointer"}
                              `}
                              disabled={spots === 0}
                            >
                              {spots === 0 ? (
                                <XCircle className="w-4 h-4" />
                              ) : (
                                <>
                                  <Users className="w-3 h-3 mb-1" />
                                  <span>{spots}</span>
                                </>
                              )}
                            </button>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Selected Slot Info */}
        {selectedSlot && (
          <Card className="mt-8 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Выбранный слот</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedSlot.split("-")[0]} • {selectedSlot.split("-")[1]}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">
                      Доступно мест: {scheduleData[selectedSlot.split("-")[0]][selectedSlot.split("-")[1]]}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={() => setSelectedSlot(null)}>
                    Отменить
                  </Button>
                  <Button>
                    <a href="/account.html">Записаться</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Mobile View Notice */}
        <Card className="mt-8 md:hidden">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Мобильная версия</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Для удобства просмотра расписания поверните устройство горизонтально или используйте прокрутку таблицы.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Доступные слоты</h3>
              <p className="text-2xl font-bold text-green-500">
                {Object.values(scheduleData).reduce(
                  (total, competition) => total + Object.values(competition).filter((spots) => spots > 0).length,
                  0,
                )}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Заполненные слоты</h3>
              <p className="text-2xl font-bold text-red-500">
                {Object.values(scheduleData).reduce(
                  (total, competition) => total + Object.values(competition).filter((spots) => spots === 0).length,
                  0,
                )}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Всего мест</h3>
              <p className="text-2xl font-bold text-primary">
                {Object.values(scheduleData).reduce(
                  (total, competition) => total + Object.values(competition).reduce((sum, spots) => sum + spots, 0),
                  0,
                )}
              </p>
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
