import { Component } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
  joursSemaine: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  heures: string[] = ['01:00', '02:00', '03:00', '04:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];

  // You can use a date object to keep track of the current date and navigate weeks or months.
  currentDate: Date = new Date();

  // Function to navigate to the next week
  nextWeek() {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
  }

  // Function to navigate to the previous week
  previousWeek() {
    this.currentDate.setDate(this.currentDate.getDate() - 7);
  }

  // Function to navigate to the next month
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
  }

  // Function to navigate to the previous month
  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
  }

  getDayNumber(jour: string): number {
    // Récupérer le jour de la semaine sous forme de nombre (0 pour Dimanche, 1 pour Lundi, ... 6 pour Samedi)
    const jourNumber = this.joursSemaine.indexOf(jour);

    // Récupérer le jour du mois (1 à 31)
    const jourDuMois = this.currentDate.getDate();

    // Récupérer le premier jour de la semaine du mois en cours
    const premierJourDuMois = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();

    // Calculer le décalage pour obtenir le premier jour de la semaine
    let decalage = jourNumber - premierJourDuMois;
    if (decalage > 0) {
      decalage -= 7;
    }

    // Calculer le numéro du jour dans le mois en tenant compte du décalage
    const numeroJourDansMois = jourDuMois + decalage;

    return numeroJourDansMois;
  }

  getCurrentMonthName(): string {
    const monthNames: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return monthNames[this.currentDate.getMonth()];
  }

  // Function to get the current year
  getCurrentYear(): number {
    return this.currentDate.getFullYear();
  }

  // Function to get events for a specific day and hour (replace this with your actual event retrieval logic)
  getEventsForDay(jour: string, heure: string): string[] {
    // Replace this with your actual logic to retrieve events for the specified day and hour
    // For example, you can have an array of events and return events for the given day and hour here.
    return [];
  }
}
