import { Subject } from 'rxjs/Subject';

import { Exercise } from './exercise.model';

export class TrainingService {

  exerciseChanged = new Subject<Exercise>(); // Tells anyone who is listening that payload will be of type Exercise
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
    { id: 'push-ups', name: 'Push Ups', duration: 90, calories: 18 },
    { id: 'sit-ups', name: 'Sit Ups', duration: 90, calories: 18 }
  ];

  private runningExercise: Exercise;
  private exercises: Exercise[] = [];

  getAvailableExercises() {
    return this.availableExercises.slice(); // trick - to make copy of array before returning
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getCompletedOrCancelledExercises() {
    return this.exercises.slice();
  }

  startExercise(selectId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectId);
    this.exerciseChanged.next({...this.runningExercise}); // Emit exerciseChanged with a payload of a copy of runningExercise
  }

  completeExercise() {
    this.exercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }
}
