---
title: Learn how to write new quantum algorithms on quantumalgorithms.org
author: Alessandro Luongo and Armando Bellante
day: 9
month: 11
year: 2021
---

Have you ever tried to learn about quantum algorithms but got stranded by the lack of structured material online? We've got you covered. Now you can learn more about it on [https://quantumalgorithms.org](https://quantumalgorithms.org)!

[Quantumalgorithms.org](https://quantumalgorithms.org) is an open-source book on quantum algorithms with two purposes: 

- Closing the gap between the usual introductory course in quantum computing and the state-of-the-art research papers in quantum algorithms. 
- Being the peer-reviewed, up-to-date, go-to reference for lemmas, theorems, corollaries, and algorithms needed by quantum algorithms researchers and quantum software developers.

As of today, the book focuses on an algorithmic perspective of quantum machine learning and touches topics like quantum algorithms for Monte Carlo, techniques for lower bounding query complexity, and numerical experiments on real datasets. A sizeable appendix also covers the theory needed to understand quantum machine learning from a computer science perspective. This is how the content is structured so far.

**In Part 1** - *introduction and toolkit* - we briefly introduce our formalism for quantum computing, with the axioms of quantum mechanics, explaining how to I/O (input and output) classical data in a quantum computer. Then, we outline a list of theorems and algorithms that are the basic toolkit of the quantum algorithm researcher and give concrete examples on how to use them. You can find in here all the subroutines for performing singular value estimation, phase estimation, finding the minimum, distance estimation, inner product estimation, amplitude estimation, and so on.

**In Part 2** - *quantum algorithms and quantum machine learning* - we see how to use the techniques described previously, with a focus on machine learning. We see how to perform clustering (q-means, quantum Gaussian mixture models) and dimensionality reduction (quantum PCA and quantum slow feature analysis). Last but not least, we have a chapter on quantum algorithms for Monte Carlo (which we are expanding in these weeks to include more algorithms and applications), algorithms on graphs, and techniques for lower bounding the query complexity of your algorithms, and much more. 

**In Part 3** - *the appendix* - we focus on putting together the mathematical background, definitions, and theorems that are used throughout the book. We put much emphasis on linear algebra, concentration inequalities, and tricks that are often taken for granted in most papers. 


The book has a core team and many contributors that help keep it updated, clear, and correct. It started in its early days from the old blog of Alessandro Luongo, subsequently including parts of his Ph.D. thesis on quantum machine learning. Then we added contents from the MSc thesis of Armando Bellante. We recently hosted five students from the mentorship program of the Quantum Open Source Foundation. With them, we worked on quantum algorithms on graphs, quantum algorithms for speeding up Monte Carlo techniques, and quantum perceptrons algorithms. Many friends and great researchers have contributed to the project by spotting typos, writing chapters, submitting parts of their papers or thesis chapters. We wholeheartedly thank them and report their names here: Patrick Rebentrost, Yassine Hamoudi, Martin Plávala, Trong Duong, Filippo Miatto, Jinge Bao, Michele Vischi, Adrian Lee, Samantha Buck, Sathyawageeswar Subramanian. 

[Quantumalgorithms.org](https://quantumalgorithms.org) has constantly been growing. The project is currently supported by the [Unitary Fund](https://unitary.fund) and the [Centre For Quantum Technologies](https://quantumlah.org) (the CQT of Singapore). These funds are dedicated to compensating collaborators that help us write more high-quality content and enrich the book's quality. At the moment, two collaborators are working on some brand-new, thrilling chapters that should be available by the end of the year!

The book has already been used as teaching material for two different courses at Politecnico di Milano. We hope [quantumalgorithms.org](https://quantumalgorithms.org) can be used fruitfully in many other courses, summer schools, workshops, etc., in the future. Do you plan to teach quantum computing and quantum algorithms and need some lecture notes to support your teaching? Let us know! We would be extremely happy to cite your course on our website, share our teaching experience based on these lecture notes, and hand out additional material not yet transcribed on the website.

This is just the beginning of our journey. In the future, the book will cover more content: new quantum algorithms and more appendices to cover advanced theoretical computer science topics. Interested MSc and Ph.D. students are encouraged to engage with the core team of the open-source project (contacts below!). We need your help in building this giant book! There are many big and small issues on GitHub that are waiting for you! New chapters are waiting to be written, and many sections could be expanded or ameliorated.
 
As the book grows, we are encouraging all kinds of contributors: 

- Typo Hunters, 
- Friendly Reviewers, 
- Consistency Fanatics,  
- Precise Writers. 
 
To name some tasks, we are searching for contributors to improve the section on error propagation and write more introductory material in chapters 2 and 3. Another much-appreciated contribution would be to give us feedback on the book's content: are there parts that are too hard to understand? Can a section be made more easily accessible? Are we missing some algorithm or paper to cite? We also have a list of exercises that are waiting to be added to the book. Are you willing to go the extra mile, write a whole new chapter, and get paid for your contribution? Contact us, and let's have a chat! We are waiting for you!

The core team,

- Alessandro Luongo, ale[at]nus.edu.sg
- Armando Bellante, armando.bellante[at]polimi.it

P.s. We are working on some high-quality [quantumalgorithms.org](https://quantumalgorithms.org)'s swag for our contributors ;)