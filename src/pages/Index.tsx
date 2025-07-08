import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationGoal] = useState(500000);
  const [donationsCount, setDonationsCount] = useState(0);

  // Анимация счетчика
  useEffect(() => {
    const targetAmount = 347650;
    const targetCount = 1247;
    const duration = 2000;
    const steps = 60;
    const amountStep = targetAmount / steps;
    const countStep = targetCount / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps) {
        setDonationAmount(Math.floor(amountStep * currentStep));
        setDonationsCount(Math.floor(countStep * currentStep));
        currentStep++;
      } else {
        setDonationAmount(targetAmount);
        setDonationsCount(targetCount);
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (donationAmount / donationGoal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Главный блок */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent z-10"></div>
        <img
          src="/img/224550ab-4c9c-4986-a16c-93b0eadd4358.jpg"
          alt="Поддержка военных"
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight animate-fade-in">
              Поддержим наших защитников
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Каждое пожертвование — это шаг к победе и поддержка тех, кто
              защищает нашу свободу
            </p>
            <div className="flex gap-4 justify-center animate-fade-in">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Icon name="Heart" className="mr-2" />
                Помочь сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                <Icon name="Info" className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Счетчик пожертвований */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg border-0 animate-fade-in">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-heading font-bold text-gray-800 mb-2">
                Результаты нашей работы
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Благодаря вашей поддержке мы уже помогли тысячам военных
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Прогресс-бар */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">
                    Собрано средств
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {donationAmount.toLocaleString()} ₽
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Цель: {donationGoal.toLocaleString()} ₽</span>
                  <span>{Math.round(progressPercentage)}% от цели</span>
                </div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="flex justify-center mb-3">
                    <Icon name="Users" size={32} className="text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {donationsCount}
                  </div>
                  <div className="text-gray-600">Пожертвований</div>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="flex justify-center mb-3">
                    <Icon name="Shield" size={32} className="text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    892
                  </div>
                  <div className="text-gray-600">Военных получили помощь</div>
                </div>

                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="flex justify-center mb-3">
                    <Icon
                      name="Package"
                      size={32}
                      className="text-orange-600"
                    />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    156
                  </div>
                  <div className="text-gray-600">Отправленных посылок</div>
                </div>
              </div>

              {/* Кнопки быстрого пожертвования */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  Быстрое пожертвование
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[500, 1000, 2500, 5000].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="h-16 text-lg font-semibold hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
                    >
                      {amount.toLocaleString()} ₽
                    </Button>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-12 py-3 text-lg">
                    <Icon name="Heart" className="mr-2" />
                    Другая сумма
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Информационный блок */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">
              Наша миссия
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы обеспечиваем всестороннюю поддержку военнослужащим и их семьям.
              Наша цель — предоставить необходимую помощь тем, кто защищает нашу
              страну.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="Shield" className="mr-2 text-blue-600" />
                  Прямая поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Финансовая помощь военнослужащим и их семьям в трудные времена
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="Package" className="mr-2 text-green-600" />
                  Гуманитарная помощь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Отправка необходимых товаров, медикаментов и предметов первой
                  необходимости
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
