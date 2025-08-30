import { TestimonialsWidget } from "@/components/ui/testimonials-widget"

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'O Instituto transformou completamente a vida da minha filha. Hoje ela tem esperança e sonha em fazer faculdade.',
    name: 'Maria Silva',
    username: '@mariasilva',
    social: 'https://twitter.com/mariasilva'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Como mentor, posso dizer que o impacto é real. Ver o crescimento dessas crianças não tem preço.',
    name: 'João Carlos',
    username: '@joaocarlos',
    social: 'https://twitter.com/joaocarlos'
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Investir no Instituto Abaixo foi a melhor decisão. Ver relatórios reais de transformação é emocionante.',
    name: 'Ana Santos',
    username: '@anasantos',
    social: 'https://twitter.com/anasantos'
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'O acompanhamento personalizado fez toda diferença na educação do meu filho.',
    name: 'Carlos Eduardo',
    username: '@carloseduardo',
    social: 'https://twitter.com/carloseduardo'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Como voluntária, sinto que faço parte de algo maior. É o amor de Deus em ação.',
    name: 'Beatriz Lima',
    username: '@beatrizlima',
    social: 'https://twitter.com/beatrizlima'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Antes eu não acreditava no meu futuro. Hoje estou na faculdade e quero ajudar outras crianças.',
    name: 'Lucas Oliveira',
    username: '@lucasoliveira',
    social: 'https://twitter.com/lucasoliveira'
  }
];

export function DemoTestimonials() {
  return (
    <div className="container py-10">
      <TestimonialsWidget 
        testimonials={testimonials}
        title="Histórias que Transformam"
        description="Depoimentos reais de famílias, mentores e jovens que fazem parte da nossa missão de transformação."
        maxDisplayed={4}
      />
    </div>
  )
}