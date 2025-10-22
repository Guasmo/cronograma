import { useState } from 'react';
import { Calendar } from 'lucide-react';

const DiagramaGantt = () => {
  const [completadas] = useState<number[]>([]);

  const fechaInicio = new Date(2025, 9, 22);
  const fechaFin = new Date(2026, 1, 13);
  
  const calcularSemanas = () => {
    const semanas = [];
    let fechaActual = new Date(fechaInicio);
    let semanaNum = 1;
    
    while (fechaActual <= fechaFin) {
      const finSemana = new Date(fechaActual);
      finSemana.setDate(finSemana.getDate() + 6);
      
      semanas.push({
        num: semanaNum,
        inicio: new Date(fechaActual),
        fin: finSemana <= fechaFin ? finSemana : new Date(fechaFin)
      });
      
      fechaActual.setDate(fechaActual.getDate() + 7);
      semanaNum++;
    }
    
    return semanas;
  };

  const semanas = calcularSemanas();

  const tareas = [
    { 
      id: 1, 
      nombre: "Definición de objetivos y funcionalidades", 
      semanaInicio: 1, 
      duracion: 1, 
      color: "bg-purple-500",
      objetivo: "Crear e implementar una página web profesional",
      actividades: ["Análisis de requisitos", "Definir estructura del sitio"],
      recursos: ["Software de diseño", "Herramientas de prototipado"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 2, 
      nombre: "Análisis de competencia", 
      semanaInicio: 1, 
      duracion: 1, 
      color: "bg-purple-500",
      objetivo: "Crear e implementar una página web profesional",
      actividades: ["Análisis de requisitos", "Definir estructura del sitio"],
      recursos: ["Software de diseño", "Referencias del sector"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 3, 
      nombre: "Creación de wireframes y mockups", 
      semanaInicio: 2, 
      duracion: 1, 
      color: "bg-purple-500",
      objetivo: "Crear e implementar una página web profesional",
      actividades: ["Crear wireframes", "Mockups del diseño"],
      recursos: ["Figma, Adobe XD", "Acceso a internet"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 4, 
      nombre: "Selección de colores y tipografía", 
      semanaInicio: 2, 
      duracion: 1, 
      color: "bg-purple-500",
      objetivo: "Crear e implementar una página web profesional",
      actividades: ["Definir paleta de colores", "Seleccionar tipografías"],
      recursos: ["Herramientas de diseño", "Referencias visuales"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 5, 
      nombre: "Diseño de logo y marca", 
      semanaInicio: 2, 
      duracion: 1, 
      color: "bg-purple-500",
      objetivo: "Crear e implementar una página web profesional",
      actividades: ["Diseñar logo", "Definir identidad de marca"],
      recursos: ["Software de diseño", "Herramientas gráficas"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 6, 
      nombre: "Hosting y dominio", 
      semanaInicio: 3, 
      duracion: 1, 
      color: "bg-blue-500",
      objetivo: "Configurar hosting y dominio web",
      actividades: ["Seleccionar proveedor", "Registrar dominio"],
      recursos: ["Cuenta de hosting", "Presupuesto para dominio"],
      responsables: "Juan David"
    },
    { 
      id: 7, 
      nombre: "Instalación WordPress y tema", 
      semanaInicio: 3, 
      duracion: 1, 
      color: "bg-blue-500",
      objetivo: "Configurar hosting y dominio web",
      actividades: ["Instalar WordPress", "Configurar tema"],
      recursos: ["Acceso a cPanel", "Documentación técnica"],
      responsables: "Juan David"
    },
    { 
      id: 8, 
      nombre: "Plugins y configuración", 
      semanaInicio: 3, 
      duracion: 1, 
      color: "bg-blue-500",
      objetivo: "Configurar hosting y dominio web",
      actividades: ["Instalar plugins", "Configurar funcionalidades"],
      recursos: ["Plugins premium", "Guías de configuración"],
      responsables: "Juan David"
    },
    { 
      id: 9, 
      nombre: "Página de inicio", 
      semanaInicio: 4, 
      duracion: 1, 
      color: "bg-green-500",
      objetivo: "Desarrollar contenido visual y textual",
      actividades: ["Crear página inicio", "Optimizar imágenes"],
      recursos: ["WordPress con tema", "Banco de imágenes"],
      responsables: "Daniel, Juan David"
    },
    { 
      id: 10, 
      nombre: "Página de servicios", 
      semanaInicio: 5, 
      duracion: 1, 
      color: "bg-green-500",
      objetivo: "Desarrollar contenido visual y textual",
      actividades: ["Crear página servicios", "Redactar descripciones"],
      recursos: ["Plugins de construcción", "Editor de texto"],
      responsables: "Daniel, Juan David"
    },
    { 
      id: 11, 
      nombre: "Página de contacto", 
      semanaInicio: 5, 
      duracion: 1, 
      color: "bg-green-500",
      objetivo: "Desarrollar contenido visual y textual",
      actividades: ["Crear página contacto", "Configurar formularios"],
      recursos: ["Elementor, WPBakery", "Plugin de formularios"],
      responsables: "Daniel, Juan David"
    },
    { 
      id: 12, 
      nombre: "Portafolio/Galería", 
      semanaInicio: 6, 
      duracion: 1, 
      color: "bg-green-500",
      objetivo: "Desarrollar contenido visual y textual",
      actividades: ["Desarrollar galería", "Optimizar imágenes"],
      recursos: ["Fotografías propias", "Plugin de galería"],
      responsables: "Daniel, Juan David"
    },
    { 
      id: 13, 
      nombre: "Promociones y testimonios", 
      semanaInicio: 6, 
      duracion: 1, 
      color: "bg-green-500",
      objetivo: "Desarrollar contenido visual y textual",
      actividades: ["Crear sección promociones", "Agregar testimonios"],
      recursos: ["Contenido del cliente", "Diseño visual"],
      responsables: "Daniel, Juan David"
    },
    { 
      id: 14, 
      nombre: "Configuración del blog", 
      semanaInicio: 7, 
      duracion: 1, 
      color: "bg-yellow-500",
      objetivo: "Implementar estrategia de contenido SEO",
      actividades: ["Configurar blog", "Crear calendario editorial"],
      recursos: ["Plugin de SEO", "Yoast SEO, Rank Math"],
      responsables: "Daniel"
    },
    { 
      id: 15, 
      nombre: "Artículos de belleza (5)", 
      semanaInicio: 7, 
      duracion: 2, 
      color: "bg-yellow-500",
      objetivo: "Implementar estrategia de contenido SEO",
      actividades: ["Redactar 5 artículos", "Optimizar para SEO"],
      recursos: ["Google Keyword Planner", "Herramientas SEO"],
      responsables: "Daniel"
    },
    { 
      id: 16, 
      nombre: "Optimización SEO", 
      semanaInicio: 8, 
      duracion: 1, 
      color: "bg-yellow-500",
      objetivo: "Implementar estrategia de contenido SEO",
      actividades: ["Optimizar meta tags", "Mejorar velocidad"],
      recursos: ["Plugin de SEO", "Herramientas de análisis"],
      responsables: "Daniel"
    },
    { 
      id: 17, 
      nombre: "Google Analytics y Search Console", 
      semanaInicio: 8, 
      duracion: 1, 
      color: "bg-yellow-500",
      objetivo: "Implementar estrategia de contenido SEO",
      actividades: ["Configurar Analytics", "Configurar Search Console"],
      recursos: ["Cuenta Google Analytics", "Cuenta Search Console"],
      responsables: "Daniel"
    },
    { 
      id: 18, 
      nombre: "WhatsApp Business", 
      semanaInicio: 9, 
      duracion: 1, 
      color: "bg-pink-500",
      objetivo: "Integrar canales de comunicación directa",
      actividades: ["Integrar WhatsApp", "Configurar widget"],
      recursos: ["WhatsApp Business API", "Plugin de chat"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 19, 
      nombre: "Formularios y redes sociales", 
      semanaInicio: 9, 
      duracion: 1, 
      color: "bg-pink-500",
      objetivo: "Integrar canales de comunicación directa",
      actividades: ["Configurar formularios", "Enlazar redes sociales"],
      recursos: ["Contact Form 7", "Cuentas de redes sociales"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 20, 
      nombre: "PAUSA NAVIDEÑA", 
      semanaInicio: 10, 
      duracion: 2, 
      color: "bg-red-300",
      objetivo: "Período de descanso",
      actividades: ["Descanso navideño"],
      recursos: ["N/A"],
      responsables: "N/A"
    },
    { 
      id: 21, 
      nombre: "Recordatorios y optimización", 
      semanaInicio: 12, 
      duracion: 1, 
      color: "bg-pink-500",
      objetivo: "Integrar canales de comunicación directa",
      actividades: ["Sistema de recordatorios", "Optimizar comunicación"],
      recursos: ["Plugin de reservas", "WPForms"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 22, 
      nombre: "Pruebas desktop y móvil", 
      semanaInicio: 13, 
      duracion: 1, 
      color: "bg-orange-500",
      objetivo: "Realizar pruebas",
      actividades: ["Pruebas en dispositivos", "Verificar responsive"],
      recursos: ["Dispositivos de prueba", "Smartphone, tablet"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 23, 
      nombre: "Pruebas de velocidad", 
      semanaInicio: 13, 
      duracion: 1, 
      color: "bg-orange-500",
      objetivo: "Realizar pruebas",
      actividades: ["Pruebas de carga", "Optimizar velocidad"],
      recursos: ["Google PageSpeed", "GTmetrix"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 24, 
      nombre: "Corrección de errores", 
      semanaInicio: 14, 
      duracion: 1, 
      color: "bg-orange-500",
      objetivo: "Realizar pruebas",
      actividades: ["Corregir bugs", "Verificar funcionalidad"],
      recursos: ["Checklist de calidad", "Herramientas de testing"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 25, 
      nombre: "Pruebas con cliente", 
      semanaInicio: 14, 
      duracion: 1, 
      color: "bg-orange-500",
      objetivo: "Realizar pruebas",
      actividades: ["Pruebas con cliente", "Recopilar feedback"],
      recursos: ["Feedback del cliente", "Lista de verificación"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 26, 
      nombre: "Capacitación al cliente", 
      semanaInicio: 15, 
      duracion: 1, 
      color: "bg-red-500",
      objetivo: "Capacitar al cliente y lanzar el sitio",
      actividades: ["Capacitación WordPress", "Entrenar en gestión"],
      recursos: ["Material de capacitación", "Videos, guías"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 27, 
      nombre: "Manual de usuario", 
      semanaInicio: 15, 
      duracion: 1, 
      color: "bg-red-500",
      objetivo: "Capacitar al cliente y lanzar el sitio",
      actividades: ["Crear manual", "Documentar funciones"],
      recursos: ["Manual en PDF", "Guías paso a paso"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 28, 
      nombre: "SEO y seguridad final", 
      semanaInicio: 15, 
      duracion: 1, 
      color: "bg-red-500",
      objetivo: "Capacitar al cliente y lanzar el sitio",
      actividades: ["Verificar SEO final", "Configurar seguridad"],
      recursos: ["Plugin de seguridad", "Wordfence, Sucuri"],
      responsables: "Juan David, Daniel"
    },
    { 
      id: 29, 
      nombre: "Revisión final y lanzamiento", 
      semanaInicio: 16, 
      duracion: 1, 
      color: "bg-red-500",
      objetivo: "Capacitar al cliente y lanzar el sitio",
      actividades: ["Revisión completa", "Lanzamiento oficial"],
      recursos: ["Backup automático", "Monitoreo"],
      responsables: "Juan David, Daniel"
    }
  ];

  const formatearFecha = (fecha: Date) => {
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${fecha.getDate()} ${meses[fecha.getMonth()]}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            DIANA PADILLA ESTÉTICA & SPA
          </h1>
          <h2 className="text-xl text-purple-700 mb-3">
            Diagrama de Gantt - Desarrollo Web
          </h2>
          <div className="flex items-center justify-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold">22 Oct 2025 - 13 Feb 2026</span>
            </div>
            <span>|</span>
            <span>17 semanas</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <div className="grid grid-cols-7 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span>Planificación</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Técnica</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Contenido</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>Blog/SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-500 rounded"></div>
              <span>Integración</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span>Pruebas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>Lanzamiento</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-x-auto mb-8">
          <div className="min-w-max">
            <div className="flex border-b-2 border-gray-300 bg-gray-50">
              <div className="w-35 p-3 font-bold text-gray-700 border-r border-gray-300 flex-shrink-0">
                Objetivos
              </div>
              <div className="w-35 p-3 font-bold text-gray-700 border-r border-gray-300 flex-shrink-0">
                Actividades
              </div>
              <div className="w-50 p-3 font-bold text-gray-700 border-r border-gray-300 flex-shrink-0">
                Recursos Necesarios
              </div>
              <div className="w-40 p-3 font-bold text-gray-700 border-r-2 border-gray-300 flex-shrink-0">
                Responsables
              </div>
              {semanas.map((semana) => (
                <div key={semana.num} className="w-20 p-2 text-center border-r border-gray-200 flex-shrink-0">
                  <div className="font-bold text-xs text-purple-700">S{semana.num}</div>
                  <div className="text-xs text-gray-500">{formatearFecha(semana.inicio)}</div>
                </div>
              ))}
            </div>

            {tareas.map((tarea) => (
              <div key={tarea.id} className="flex border-b border-gray-200 hover:bg-gray-50">
                
                <div className="w-35 p-3 border-r border-gray-300 flex items-center flex-shrink-0">
                  <p className="text-xs text-gray-600">{tarea.objetivo}</p>
                </div>
                
                <div className="w-35 =p-3 border-r border-gray-300 flex items-center flex-shrink-0">
                  <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                    {tarea.actividades.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-50 p-3 border-r border-gray-300 flex items-center flex-shrink-0">
                  <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                    {tarea.recursos.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-40 p-3 border-r-2 border-gray-300 flex items-center flex-shrink-0">
                  <p className="text-xs text-gray-700 font-medium">{tarea.responsables}</p>
                </div>
                
                <div className="flex relative" style={{ width: `${semanas.length * 80}px` }}>
                  {semanas.map((semana) => (
                    <div key={semana.num} className="w-20 border-r border-gray-100 flex-shrink-0"></div>
                  ))}
                  
                  <div
                    className={`absolute top-2 ${tarea.color} rounded h-6 shadow-md flex items-center justify-center transition-opacity ${
                      completadas.includes(tarea.id) ? 'opacity-40' : 'opacity-100'
                    }`}
                    style={{
                      left: `${(tarea.semanaInicio - 1) * 80 + 4}px`,
                      width: `${tarea.duracion * 80 - 8}px`
                    }}
                  >
                    <span className="text-white text-xs font-semibold px-2 truncate">
                      {tarea.duracion > 1 ? `${tarea.duracion}s` : ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagramaGantt;