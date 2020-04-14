using Entity;
using System;
using Logica;
namespace PrimerParcial.Models {

    public class PersonaInputModel {
        public string Nombre { get; set; }
        public string Identificacion { get; set; }
        public int CapitalInicial { get; set; }
        public int TasadeInteresComp { get; set; }
        public int Tiempo { get; set; }
    }   

    public class PersonaViewModel : PersonaInputModel {
        public PersonaViewModel () {

        }
        public PersonaViewModel (Persona persona) {
            Identificacion = persona.Identificacion;
            Nombre = persona.Nombre;
            CapitalInicial = persona.CapitalInicial;
            TasadeInteresComp = persona.TasadeInteresComp;
            Tiempo = persona.Tiempo;
            Valortotal = persona.Valortotal;

        }

        public decimal Valortotal { get; set; }
    }

}