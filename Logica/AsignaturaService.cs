using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class AsignaturaService
    {
        private readonly UpcLabContext _context;

        public AsignaturaService(UpcLabContext context)
        {
            _context = context;
        }

        public class GuardarAsignaturaResponse
        {
            public GuardarAsignaturaResponse(Asignatura asignatura)
            {
                Error = false;
                Asignatura = asignatura;
            }
            public GuardarAsignaturaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }

            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Asignatura Asignatura { get; set; }
        }

        public GuardarAsignaturaResponse Guardar(Asignatura asignatura)
        {
            try
            {
                var asignaturaConsultada = _context.Asignaturas.Find(asignatura.CodAsignatura);
                if (asignaturaConsultada != null)
                {
                    return new GuardarAsignaturaResponse("Error la asignatura ya se encuentra registrada");
                }
                _context.Asignaturas.Add(asignatura);
                _context.SaveChanges();
                return new GuardarAsignaturaResponse(asignatura);
            }
            catch (Exception e)
            {
                return new GuardarAsignaturaResponse($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Asignatura> ConsultarTodas()
        {
            List<Asignatura> asignaturas = _context.Asignaturas.ToList();
            return asignaturas;
        }
    }
}
