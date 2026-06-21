import { useState } from "react"

const team = [
  {
    name: "Анна Соколова",
    role: "Главный дизайнер",
    description: "10 лет опыта в дизайне интерьеров. Специализируется на жилых пространствах и минимализме.",
    initials: "АС",
    color: "bg-stone-200",
  },
  {
    name: "Михаил Орлов",
    role: "Прораб",
    description: "Руководит всеми ремонтными работами. Гарантирует качество отделки и соблюдение сроков.",
    initials: "МО",
    color: "bg-amber-100",
  },
  {
    name: "Елена Воронова",
    role: "Дизайнер интерьеров",
    description: "Создаёт авторские концепции. Эксперт по подбору материалов и цветовых палитр.",
    initials: "ЕВ",
    color: "bg-orange-100",
  },
  {
    name: "Дмитрий Кузнецов",
    role: "Менеджер проектов",
    description: "Координирует все этапы от замера до сдачи объекта. Ваш личный куратор во время ремонта.",
    initials: "ДК",
    color: "bg-stone-100",
  },
  {
    name: "Ирина Белова",
    role: "Визуализатор",
    description: "Создаёт фотореалистичные 3D-визуализации. Вы увидите интерьер до начала ремонта.",
    initials: "ИБ",
    color: "bg-amber-50",
  },
]

export function Team() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-10 text-center">Наша команда</p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-3 cursor-default"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                {/* Glow ring */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    hovered === index
                      ? "shadow-[0_0_0_4px_rgba(251,146,60,0.3),0_0_24px_8px_rgba(251,146,60,0.15)] scale-110"
                      : "shadow-[0_0_0_2px_rgba(0,0,0,0.06)]"
                  }`}
                  style={{ borderRadius: "9999px" }}
                />

                {/* Avatar circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 relative z-10 ${member.color} ${
                    hovered === index ? "scale-105" : "scale-100"
                  }`}
                >
                  <span className="text-xl font-medium text-foreground/70 select-none">{member.initials}</span>
                </div>
              </div>

              {/* Tooltip */}
              <div className="relative flex flex-col items-center">
                <p className="text-sm font-medium text-foreground text-center">{member.name}</p>
                <p className="text-xs text-muted-foreground text-center">{member.role}</p>

                <div
                  className={`absolute top-full mt-3 w-56 bg-white border border-border rounded-xl p-3 shadow-lg z-20 transition-all duration-300 pointer-events-none ${
                    hovered === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                  }`}
                >
                  <p className="text-xs text-muted-foreground leading-relaxed text-center">{member.description}</p>
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-border rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
