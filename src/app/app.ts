import { Component } from '@angular/core';
import { Starfield } from './components/starfield/starfield';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Starfield, Nav, Hero, About, Skills, Projects, Experience, Contact, Footer],
  templateUrl: './app.html',
})
export class App {}
