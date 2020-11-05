using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Docente
    {
        [Key]
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
    }
}
