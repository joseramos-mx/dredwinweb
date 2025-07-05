import { MapPin, Clock, Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-white p-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 rounded-lg shadow-sm border max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Información de Contacto</h2>

      <div className="space-y-4">
        {/* Dirección */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
            <p className="text-gray-600 leading-relaxed">
              Gómez Palacio #501pte, Zona Centro,
              <br />
              Central Médica Santa Ana,
              <br />
              Durango, Dgo.
            </p>
          </div>
        </div>

        {/* Horario */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Horario</h3>
            <p className="text-gray-600">Lunes a Viernes de 14:00</p>
          </div>
        </div>

        {/* Teléfono */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Phone className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
            <a href="tel:+528719737381" className="text-gray-600 hover:text-blue-600 transition-colors">
              (871) 973-7381
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
