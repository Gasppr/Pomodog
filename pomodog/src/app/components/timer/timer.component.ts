import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  countdown: object;
  private intervalId: any | null = null;
  timer: number;
  activateControls = false;
  isPaused = false;

  countsDog: string[] = [
    'horário que terminou o 1°',
    'horário que terminou o 2°',
    '3',
    '4',
    '5',
    '6',
  ];

  constructor() {
    this.timer = 0;
    this.countdown = {
      background: `conic-gradient(#497ef0 ${this.timer}%, 0, transparent)`,
    };
  }

  startTimer() {
    console.log('start');
    this.activateControls = true;
    this.isPaused = false;
    this.runTimer();
  }

  pauseTimer() {
    console.log('pause');
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isPaused = true;
    }
  }

  stopTimer() {
    console.log('restart');
    this.pauseTimer();
    this.timer = 0;
    this.isPaused = false;
    this.activateControls = false;
    this.updateCountdown();
  }

  private runTimer() {
    this.intervalId = setInterval(() => {
      if (this.timer < 100) {
        this.timer++;
        this.updateCountdown();
      } else {
        this.stopTimer();
      }
    }, 1000 * 18);
  }

  private updateCountdown() {
    this.countdown = {
      background: `conic-gradient(#497ef0 ${this.timer}%, 0, transparent)`,
    };
  }
}
