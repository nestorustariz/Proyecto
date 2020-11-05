using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AsignaturaController : ControllerBase
    {
        private readonly AsignaturaService _asignaturaService;

        public AsignaturaController(UpcLabContext context)
        {
            _asignaturaService = new AsignaturaService(context);
        }

        [HttpPost]
        public ActionResult<Asignatura> Post(Asignatura asignatura)
        {
            Asignatura asignaturaMapeada = MapearAsignatura(asignatura);
            var response = _asignaturaService.Guardar(asignaturaMapeada);
            if (response.Error)
            {   
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Asignatura);
        }

        private Asignatura MapearAsignatura(Asignatura asignatura)
        {
            var _asignatura = new Asignatura
            {
                CodAsignatura = asignatura.CodAsignatura,
                NombreAsignatura = asignatura.NombreAsignatura,
                FechaReg = DateTime.Now
            };
            return _asignatura;
        }

        [HttpGet]
        public IEnumerable<Asignatura> Gets()
        {
            var personas = _asignaturaService.ConsultarTodas();
            return personas;
        }
    }
}