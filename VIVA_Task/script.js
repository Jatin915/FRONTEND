const questions = [
      { q: "HTML ka full form?", opts: ["Hyper Text Markup Language", "Home Tool Markup", "kuch bhi", "falana dhikana"], ans: 0 },
      { q: "CSS ka use kis liye hota hai?", opts: ["kuch bhi", "falana dhikana", "Styling", "Database"], ans: 2 },
      { q: "JS ka use?", opts: ["kuch bhi", "Interactivity", "falana dhikana", "Painting"], ans: 1 },
      { q: "Array me item add?", opts: ["push()", "delete()", "kuch bhi", "falana dhikana"], ans: 0 },
      { q: "Background color change in CSS?", opts: ["kuch bhi", "falana dhikana", "text-color", "background-color"], ans: 3 }
    ];

    const quiz = document.getElementById("quiz");


    questions.forEach((q, qi) => {
      const div = document.createElement("div");
      div.className = "question";

      const title = document.createElement("h2");
      title.textContent = (qi + 1) + ". " + q.q;
      div.appendChild(title);

      q.opts.forEach((opt, oi) => {
        const btn = document.createElement("div");
        btn.className = "option";
        btn.textContent = opt;

        btn.onclick = () => {
          // Disable all options
          console.log(div.children);
          Array.from(div.children).forEach(el => {
            if (el.classList.contains("option")) {
                el.onclick = null;
            }

       });

          if (oi === q.ans) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("wrong");
            const correctButton = div.children[q.ans + 1];  
            correctButton.classList.add("correct");
          }
        };

        div.appendChild(btn);
      });

      quiz.appendChild(div);
    });