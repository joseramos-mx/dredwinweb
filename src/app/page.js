import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Shield,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Stethoscope,
  Heart,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import WhatsAppFloat from "@/components/whatsapp-float"
import Component from "@/components/contact"

export default function DermatologoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#abedf6]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/logo.svg"
                alt="Dr. Edwin Maldonado Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Dr. Edwin Maldonado</h1>
              <p className="text-sm text-[#15a8c5]">Dermatólogo y Alergólogo Certificado</p>
            </div>
          </div>
          <a
            href="https://www.doctoralia.com.mx/edwin-daniel-maldonado-dominguez/dermatologo-alergologo/durango#address-id=576018&is-online-only=false&filters%5Bspecializations%5D%5B%5D=17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-[#31c5df] to-[#15a8c5] hover:from-[#15a8c5] hover:to-[#1488a6] text-white font-semibold px-6 py-2 rounded-md transition-all duration-200"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Cita
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#edfdfe] via-white to-[#d2f6fb]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#d2f6fb] text-[#176d87] hover:bg-[#d2f6fb]">
                <Award className="w-4 h-4 mr-1" />
                Especialista Certificado en Durango
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Tu piel merece una
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15a8c5] to-[#31c5df]">
                  {" "}
                  atención humana y especializada
                </span>{" "}
                en Durango
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Consulta dermatológica y alergológica con el Dr. Edwin Maldonado, especialista en piel certificado en
                Durango. Tratamientos efectivos para acné, manchas, alergias cutáneas y rejuvenecimiento facial.
                Recupera tu confianza con tecnología avanzada y un enfoque humano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.doctoralia.com.mx/edwin-daniel-maldonado-dominguez/dermatologo-alergologo/durango#address-id=576018&is-online-only=false&filters%5Bspecializations%5D%5B%5D=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#15a8c5] to-[#1488a6] hover:from-[#1488a6] hover:to-[#176d87] text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 text-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Consulta Dermatológica Durango
                </a>
                <a
                  href="tel:8719737381"
                  className="inline-flex items-center border border-[#31c5df] text-[#176d87] hover:bg-[#edfdfe] px-8 py-3 bg-transparent rounded-md transition-all duration-200 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (871) 973-7381
                </a>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#31c5df] text-[#31c5df]" />
                    ))}
                  </div>
                  <span className="text-slate-600 ml-2 flex gap-2">+25 opiniones <Image src="/doctoralia.png?height=500&width=1000" alt="doctoralia" width={20} height={1} className=""></Image></span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#d2f6fb] to-[#abedf6] rounded-2xl p-8">
                <Image
                  src="/dredwin.jpg?height=500&width=400"
                  alt="Dr. Edwin Maldonado - Dermatólogo y Alergólogo en Durango"
                  width={400}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Shield className="w-8 h-8 text-[#15a8c5]" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#31c5df] to-[#15a8c5] rounded-full p-3 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Servicios Dermatológicos Especializados en Durango
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tratamientos personalizados para el cuidado de la piel y alergias con tecnología de vanguardia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consulta Dermatológica",
                description:
                  "Diagnóstico y tratamiento profesional de enfermedades de la piel: acné, rosácea, dermatitis, melasma y cáncer de piel en Durango.",
                icon: <Stethoscope className="w-8 h-8" />,
                price: "Desde $800",
              },
              {
                title: "Consulta Alergológica",
                description:
                  "Evaluación integral de alergias respiratorias y cutáneas. Pruebas de alergia personalizadas en Durango.",
                icon: <Shield className="w-8 h-8" />,
                price: "Desde $800",
              },
              {
                title: "Pruebas Cutáneas de Alergia",
                description:
                  "Identifica de manera precisa los alérgenos que afectan tu salud. Servicio disponible en clínica dermatológica en Durango.",
                icon: <CheckCircle className="w-8 h-8" />,
                price: "Consulta Más Información",
              },
              {
                title: "Tratamiento de Manchas y Melasma",
                description: "Tecnología avanzada para aclarar manchas solares, melasma y pigmentaciones en la piel.",
                icon: <Sparkles className="w-8 h-8" />,
                price: "Consulta Más Información",
              },
              {
                title: "Control de Urticaria y Dermatitis",
                description:
                  "Enfoque especializado para manejar urticaria crónica y dermatitis con soluciones personalizadas.",
                icon: <Heart className="w-8 h-8" />,
                price: "Consulta Más Información",
              },
              {
                title: "Rejuvenecimiento Facial Dermatológico",
                description:
                  "Procedimientos dermatológicos para rejuvenecer la piel, disminuir líneas de expresión y mejorar tu autoestima.",
                icon: <Award className="w-8 h-8" />,
                price: "Consulta Más Información",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-[#abedf6] hover:border-[#31c5df]"
              >
                <CardContent className="p-6">
                  <div className="text-[#15a8c5] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#15a8c5]">{service.price}</span>
                    <a
                      href="https://www.doctoralia.com.mx/edwin-daniel-maldonado-dominguez/dermatologo-alergologo/durango#address-id=576018&is-online-only=false&filters%5Bspecializations%5D%5B%5D=17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center border border-[#31c5df] text-[#176d87] hover:bg-[#edfdfe] px-4 py-2 bg-transparent rounded-md transition-all duration-200 text-sm"
                    >
                      Más info
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-gradient-to-br from-[#edfdfe] to-[#d2f6fb]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              ¿Por qué elegir al Dr. Edwin Maldonado en Durango?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-[#15a8c5]" />,
                title: "Especialista Certificado",
                description:
                  "Dermatólogo y alergólogo certificado por el Consejo Mexicano de Dermatología. Atención profesional en Durango.",
              },
              {
                icon: <Users className="w-12 h-12 text-[#15a8c5]" />,
                title: "Decenas de Pacientes Atendidos",
                description: "Experiencia comprobada en tratamientos dermatológicos y alergias de la piel.",
              },
              {
                icon: <Shield className="w-12 h-12 text-[#15a8c5]" />,
                title: "Tecnología de Vanguardia",
                description: "Clínica dermatológica con equipos avanzados para diagnóstico y tratamiento en Durango.",
              },
              {
                icon: <Heart className="w-12 h-12 text-[#15a8c5]" />,
                title: "Atención Humana y Ética",
                description: "Cada consulta es personalizada, con un trato cercano y transparente.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Lo que dicen nuestros pacientes en Durango
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "RMRE",
                treatment: "Consulta dermatológica",
                text: "El doctor fue muy profesional al escuchar activamente las sospechas y las cosas que me tenían preocupado, esperó hasta el final de la explicación y empezó a explorar y explicar de manera tecnica y profesional lo que se estaba observando.",
                rating: 5,
              },
              {
                name: "Rey Martínez",
                treatment: "Consulta Alergológica",
                text: "Gran experiencia, sus instalaciones limpias y modernas y sobre todo el trato respetuoso hacia el paciente además respondió a todas mis inquietudes y preocupaciones, sin duda lo recomiendo 100%",
                rating: 5,
              },
              {
                name: "Carlos",
                treatment: "Consulta Dermatológica",
                text: "¡Excelente Dermatólogo y Alergólogo! Con un trato muy amable y profesional, excelente atención; sin prisas, con un tiempo adecuado para la consulta y resolución de dudas. Además te explica con detalle cada procedimiento que va a realizar.¡Súper recomendado!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-[#abedf6]">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#31c5df] text-[#31c5df]" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-[#15a8c5]">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#15a8c5] to-[#1488a6]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Quieres un diagnóstico profesional de tu piel en Durango?
            </h2>
            <p className="text-xl text-[#d2f6fb] mb-8">
              Agenda tu consulta dermatológica con el Dr. Edwin Maldonado y descubre cómo mejorar tu salud y confianza
              con atención personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.doctoralia.com.mx/edwin-daniel-maldonado-dominguez/dermatologo-alergologo/durango#address-id=576018&is-online-only=false&filters%5Bspecializations%5D%5B%5D=17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#31c5df] to-[#72deee] hover:from-[#72deee] hover:to-[#abedf6] text-[#0c2f3e] font-semibold px-8 py-3 rounded-md transition-all duration-200 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta Dermatológica
              </a>
              <a
                href="tel:8719737381"
                className="inline-flex items-center border border-white text-white hover:bg-white hover:text-[#15a8c5] px-8 py-3 bg-transparent rounded-md transition-all duration-200 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: (871) 973-7381
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Component />
        </div>

      </section>

      {/* Información de contacto */}
      

      {/* Footer */}
      <footer className="bg-[#0c2f3e] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#15a8c5] to-[#1488a6] rounded-full flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Dr. Edwin Maldonado</span>
          </div>
          <p className="text-[#72deee] mb-4">Dermatólogo y Alergólogo Certificado - Durango, México</p>
          <p className="text-sm text-[#abedf6]">
            © 2024 Dr. Edwin Maldonado - Dermatólogo en Durango. Todos los derechos reservados.
          </p>
        </div>
        
      </footer>
      <WhatsAppFloat/>
    </div>
  )
}
