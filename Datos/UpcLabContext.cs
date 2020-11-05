using System;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class UpcLabContext : DbContext
    {
        public UpcLabContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Asignatura> Asignaturas { get; set; }
    }
}
