import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
          <p className="text-xl opacity-90">
            Мы всегда готовы помочь с выбором идеального чемодана
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наши контакты
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="MapPin"
                        className="text-blue-600 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Адрес
                        </h3>
                        <p className="text-gray-600">
                          г. Москва, ул. Тверская, д. 15
                          <br />
                          ТЦ "Центральный", 2 этаж
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Phone"
                        className="text-blue-600 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Телефон
                        </h3>
                        <p className="text-gray-600">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Mail"
                        className="text-blue-600 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Email
                        </h3>
                        <p className="text-gray-600">info@luggage-store.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Clock"
                        className="text-blue-600 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Часы работы
                        </h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Пн-Пт: 10:00 - 21:00</p>
                          <p>Сб-Вс: 10:00 - 22:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <p className="text-gray-600">
                  Оставьте сообщение, и мы свяжемся с вами в ближайшее время
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема сообщения
                  </label>
                  <Input placeholder="О чём хотите спросить?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите подробнее о вашем вопросе..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
