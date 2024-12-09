import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  countdown: object;
  private intervalId: any | null = null;
  timer: number; 
  maxTime: number;
  activateControls = false;
  isPaused = false;
  formattedTime: string = '00:00';
  countsDog: string[] = [];

  constructor() {
    this.timer = 0;
    this.maxTime = 30 * 60;
    this.countdown = {
      background: `conic-gradient(#497ef0 0%, transparent 0%)`,
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
    this.formattedTime = this.formatTime(this.timer);
    this.isPaused = false;
    this.activateControls = false;
    this.updateCountdown();
  }

  private runTimer() {
    this.intervalId = setInterval(() => {
      if (this.timer < this.maxTime) {
        this.timer++;
        this.formattedTime = this.formatTime(this.timer);
        this.updateCountdown();
      } else {
        this.logCompletion();
        this.stopTimer();
      }
    }, 1000);
  }

  private logCompletion() {
    const now = new Date();
    this.countsDog.push(now.toLocaleString());

    if (this.countsDog.length > 6) {
      this.countsDog = [];
    }
  }

  private updateCountdown() {
    const percentage = (this.timer / this.maxTime) * 100;
    this.countdown = {
      background: `conic-gradient(#497ef0 ${percentage}%, transparent ${percentage}%)`,
    };
  }

  private formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${this.padTime(minutes)}:${this.padTime(remainingSeconds)}`;
  }

  private padTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
