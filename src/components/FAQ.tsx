import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит дизайн-проект и ремонт?",
    answer:
      "Стоимость зависит от площади, объема работ и выбранных материалов. После бесплатного замера и обсуждения задач мы готовим прозрачную смету с фиксированной ценой, которую закрепляем в договоре.",
  },
  {
    question: "Сколько времени занимает ремонт?",
    answer:
      "Дизайн-проект обычно готовим за 3–5 недель. Ремонт квартиры под ключ занимает от 2 до 4 месяцев в зависимости от площади и сложности. Мы заранее составляем график работ и придерживаемся сроков.",
  },
  {
    question: "Вы работаете со своими материалами или клиента?",
    answer:
      "Можем работать в любом формате. Поможем подобрать материалы под бюджет, привезем образцы и закупим всё со скидками наших поставщиков. Если у вас есть свои предпочтения — учтем их в проекте.",
  },
  {
    question: "Что входит в ремонт под ключ?",
    answer:
      "Полный цикл: черновая отделка, электрика и сантехника, выравнивание стен и пола, чистовая отделка, установка дверей, сборка мебели и финальная уборка. Вы получаете готовый интерьер, в который можно заезжать.",
  },
  {
    question: "Вы контролируете качество ремонта?",
    answer:
      "Да. За проектом закреплен прораб, который ведет объект и контролирует каждый этап. Вы получаете регулярные отчеты с фото, а после сдачи мы даем гарантию на выполненные работы.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку — мы свяжемся с вами, бесплатно приедем на замер и обсудим ваши пожелания, бюджет и сроки. После этого подготовим смету и предложение по дизайн-проекту.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}