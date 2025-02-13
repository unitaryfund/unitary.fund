---
title: Lessons from Organizing Our First FOSDEM Devroom
author: Alessandro Cosentino and Nate Stemen and Purva Thakre
day: 14
month: 2
year: 2025
tags: 
  - open-source
  - community
---

Hundreds of people crammed into a classroom at Université Libre de Bruxelles on the first Sunday of February, eager to discuss quantum computing and open-source.
Some had to be turned away for safety reasons.
This was the reality of the Quantum Computing devroom at FOSDEM 2025—our first time actively organizing it, and a whirlwind experience.
We left Belgium buzzing with ideas, enthusiasm for open-source quantum computing, and a renewed appreciation for the power of community-driven development.

<div style="width:100%;">
  <div style="float:right;width:40%;margin-left:2em;">
    <figure>
      <img class="not-prose" src="/images/2025_devroom_welcome.jpg"/>
      <figcaption>Alessandro and Nate (blue) scrambling to get set up as the room filled up, alongside the help of a FOSDEM volunteer (green).</figcaption>
    </figure> 
  </div>
</div>

We learned a lot.
Both from our amazing cast of speakers 👏, but also from organizing the event.
Before we dive into our recap and lessons learned, a huge shoutout and thank you is in order to all the FOSDEM organizers and volunteers who come together to put on this event every year.
There's nothing like it.

## Wait, what's FOSDEM? 🤔

For those not familiar with FOSDEM (many people in quantum don't know about it---more on that later), it's a non-commercial, volunteer-organized European event centered on free and open-source software development.
This year was the 25th edition, and in each of the latest editions, there have been more than 8,000 visitors.

Each year there are **a lot** of devrooms (the equivalent of a track at a research conference), and the Quantum Computing devroom was organized in two past editions in 2019 and 2020 by the Quantum Open Source Foundation, namely by Tomas Babej and Mark Fingerhuth.

For four years, the Quantum Computing devroom took a hiatus, but certainly not because there was no progress in quantum computing.
Perhaps the opposite, people were too busy building 🙂.
This year we had the honor of organizing it, and we worked to put together a Call for Proposal (CfP), and consequently a schedule.

- Schedule: https://fosdem.org/2025/schedule/track/quantum/
- CfP: https://unitary.foundation/community/FOSDEM_2025/

## What we learned 📚

FOSDEM is massive, and running a devroom is no small task.
These might be obvious to more seasoned devroom organizers, but we would have benefited from these ahead of time!

- **Collating an awesome lineup** -- Many quantum folks don't have FOSDEM on their radar (yet). If you want a strong lineup, individual solicitations are key to having an exceptional speaker lineup. This year we plan to advertise at our own events to ensure our community is more aware.
- **Day of logistics** -- [Purva](https://github.com/purva-thakre) (our third co-organizer) couldn't make it to Bruxelles, and two people on-site was barely enough. Managing the video stream, helping the speakers with the projector, moderating Q&A, handling the flow of people entering the room—it was controlled chaos. Big shoutout to [Harshit](https://github.com/TheGupta2012/) for stepping in to help!
- **Prepare for overflow** -- The room filled up fast, and we had to turn people away. It was sad to turn people around, or kick them out, but necessary to ensure FOSDEM can continue into the future. Hopefully next year we can get a bigger room.
- **Meet speakers beforehand** -- We met most of the speakers 5 minutes before their talk while they were already standing in front of the room, with a laptop in their hands. A pre-event gathering could warm up the room and foster more community among speakers and attendees alike.
- **Organizer t-shirts** -- (ok, this one is minor) We picked up our organizer t-shirts right before the devroom start on Sunday, and there were only XL and XXL sizes left.

## What we’ll do differently next time 🐞

Was our organization of the devroom perfect? No!
Are we going to organize it again? Absolutely yes!
Next iteration, we want to try some ideas.
Again, these may not sound like new ideas to more seasoned devroom organizers, but they are things we didn't think of implementing this year.

- **Fix the schedule gaps** -- We scheduled five-minute breaks between talks to ensure we had ample time for transitions, but it ended up feeling more awkward than useful. More back-to-back talks or lightning sessions would be better.
- **Promote the livestream** -- FOSDEM devrooms have a livestream for people who can't attend in person. Next time, we want to share a link to the livestream on the usual quantum forums and chats ahead of time.
- **Monitor the Element chat** -- In all honesty, we completely forgot to check the [chat](https://matrix.to/#/#2025-quantum:fosdem.org) until half-way through the schedule. At the end of the day, everything was fine, because there wasn't much engagement there, but here is a note to ourselves to monitor the chat next year.
- **A Quantum Fringe Event** -- A hackathon, meetup, or social event ahead of the devroom could allow more people to get involved in quantum, especially since some couldn't make it in the door!
- **More Club-Mate** -- We definitely didn't drink enough. FOSDEM requires high energy and [Club-Mate](https://en.wikipedia.org/wiki/Club-Mate) provides: plus it's vegan and gluten-free (not sponsored, but reach out if you work at Club-Mate 😅).
- **More tourism** -- And we don't mean seeing more of Bruxelles attractions (although that would be nice too), but attending more of other devroom's talks, and submerging ourselves more in the spirit of the event. We attended some great keynotes and a few talks in other devrooms, but I wish we had time to watch more.

## What went well 🎯

It's easy to focus on all the things we missed, or we can do better next year, but a majority of items passed over smoothly.
Is this in large part due to the amazing infrastructure FOSDEM has set up?
Yes, for example, we were glad that we were allocated a Sunday afternoon slot.
We had the chance to observe how other devrooms were functioning the day before, and as first-time organizers, we weren't overwhelmed by a full-day slot. 

We can take some minor credit too.

- **Welcome slides** -- Alessandro got the room warmed up with a brief history of the quantum devroom at FOSDEM and a (very) brief introduction to quantum computing. Since this is such a new field with many newcomers, this was very important to ensure the following talks could hit the ground running.
- **Fringe events** -- While at FOSDEM, we got to meet awesome people through FOSDEM fringe events (Google Summer of Code meetup, GitHub maintainers social, and of course a FOSDEM favorite: Delirium cafè). In retrospect, we are very happy we found the will to go to these night events.
- **Audio & Visual** -- Besides a small hiccup getting Mac's to connect to the projector, everything provided from FOSDEM worked like a charm. Read the documentation ahead of your devroom, and you're all set to go. The audio&video volunteer staff sitting in front of the room gave us a crisp debrief before we started, which was very helpful.
- **Balancing theory and practice** -- We believe the devroom schedule had a good balance of theoretical and more practical talks, but we would like to hear more feedback about this from the audience. If you attended in person, or watched the livestream, let us know by email or in the comments below what you thought.
- **No cancellation** -- Perhaps this was just luck, but we are still glad none of the speakers had to cancel.

## Quantum-specific challenges 🧩


Open-source is deeply ingrained in the quantum tech community, though in a slightly different way than in traditional software.
Unlike in classical computing, where open-source and proprietary software coexist more evenly, most quantum software is open-source—whether it's large frameworks developed by major companies or smaller projects created by individuals.
However, we noticed that the communities around quantum software projects are still relatively small, with most contributions coming from core maintainers and project founders rather than a broad base of external contributors.

There are several reasons for this.
First, the quantum software industry is still in its early stages, and many projects haven't had the time to establish themselves as firmly as long-standing classical software projects such as, say, Debian or Firefox.
Another challenge is that quantum software can seem intimidating to external contributors, as it is often perceived as requiring deep knowledge of quantum physics.
This barrier discourages many potential contributors who might otherwise engage with open-source quantum projects.
By organizing a devroom at FOSDEM, we aim to break this misconception and make the field more accessible to a broader audience. 

Hacking (not in the cryptographic sense) in quantum computing may not be as straightforward as in classical computing, often requiring access to specialized labs and expensive hardware.
As a result, the open-source culture in quantum tends to be more academic and publication-driven, in other words, more based on open science and less on the actual open-source hacker culture that thrives at FOSDEM and in more established areas of computing.
We hope that as the field matures, more tools are open-sourced, hardware becomes more accessible, and quantum hacking, as a result, will become an eventuality.

Quantum computing is also still very much an R&D field rather than an established technology.
While a classical software developer might spend their spare time hacking together a script to automate their thermostat, manage their finances, or experiment with personal projects, a quantum software developer has fewer opportunities to apply their skills outside of work—aside from conventional software development.
Quantum applications tend to be more complex and aren't always aligned with everyday needs.
This is just the nature of the field.

Moreover, quantum computing practitioners often need a broad understanding of the entire quantum computing stack, from hardware to algorithms.
Redefining the full stack of a new computational architecture is a massive challenge—but also an exciting opportunity to do so in an open-source and transparent way.
This year, our devroom lacked some perspectives from the hardware and middleware sides of the field, but we hope to broaden that diversity next year!
Open quantum hardware is steadily growing, and we'd be excited to bring more representation from that space into our next schedule.

Lastly, we hope next year to not only have the quantum devroom, but also spread the good word of quantum in other devrooms, where people might find our path of interest.
FOSS Funding, Open Research, Python, Open Hardware rooms could all be good venues for some healthy quantum cross-contamination.

## Final Thoughts 💭

<div style="width:100%;">
  <div style="float:right;width:40%;margin-left:2em;">
    <figure>
      <img class="not-prose" src="/images/2025_fosdem_room.jpg"/>
      <figcaption>Our room, all cleaned up.</figcaption>
    </figure> 
  </div>
</div>

We left Bruxelles with more ideas than we know what to do with.
Most importantly, we saw firsthand that open-source isn't just a byproduct of quantum research—it's a catalyst for real progress, which we need to continue to push for as our field becomes more commercialized.
Seeing so many researchers, developers, and contributors connect has only strengthened our commitment to growing this community.

If you're working on open-source quantum software, let's talk!
We hope our proposal for a Quantum Computing devroom gets accepted next year as well, because we plan on making it bigger and better.

Reach out to quantum-devroom-manager@fosdem.org for any question or feedback.

