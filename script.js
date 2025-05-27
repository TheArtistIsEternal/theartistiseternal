async function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value;
  if (!message) return;

  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  chatBox.innerHTML += `<div><strong>Jacob:</strong> ${reply}</div>`;
  input.value = '';
}
