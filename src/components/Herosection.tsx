"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Herosection() {
  const fullNameRef = React.useRef<HTMLInputElement>(null);
  const professionRef = React.useRef<HTMLInputElement>(null);
  const skillsRef = React.useRef<HTMLInputElement>(null);
  const educationRef = React.useRef<HTMLInputElement>(null);
  const contactRef = React.useRef<HTMLInputElement>(null);
  const experienceRef = React.useRef<HTMLInputElement>(null);
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 py-8 md:py-20 px-4 md:px-20">
      <div className="flex flex-col gap-2 md:gap-5">
        <p className="text-4xl md:text-6xl font-semibold ">
          Discover Your <br /> Dream Team,
          <br /> Find Top Talent <br /> with Hunt.ly
        </p>
        <p className="text-xl md:text-2xl opacity-60">
          Welcome to Huntly, the premier solution for finding great talent. Our
          services are tailored to meet the unique needs of each client.{" "}
        </p>
        <div className="grid gap-4 py-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-5 py-3 bg-Primary rounded-md text-white font-bold w-fit">
                Get Started
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Fullname
                </Label>
                <Input
                  id="fullname"
                  ref={fullNameRef}
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  profession
                </Label>
                <Input
                  ref={professionRef}
                  id="profession"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  skills
                </Label>
                <Input
                  id="skills"
                  ref={skillsRef}
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  education
                </Label>
                <Input
                  id="education"
                  ref={educationRef}
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  contact
                </Label>
                <Input
                  id="contact"
                  ref={contactRef}
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  experience
                </Label>
                <Input
                  id="experience"
                  ref={contactRef}
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
              <DialogFooter>
                <Button
                  onClick={() => {
                    fetch("/api/cv", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        fullName: fullNameRef.current?.value,
                        profession: professionRef.current?.value,
                        skills: skillsRef.current?.value,
                        education: educationRef.current?.value,
                        contact: contactRef.current?.value,
                        experience: experienceRef.current?.value,
                      }),
                    });
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <img src="/Frame 8.png" alt="" />
      </div>
    </main>
  );
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
