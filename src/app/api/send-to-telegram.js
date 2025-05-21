export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email } = req.body;

  // Получаем переменные из .env.local
  const botToken = '7667989040:AAEXlL6k85udTAN6m8_7yvPT-AYa72SCwEw';
  const chatId = '-4721404625';

  if (!botToken || !chatId) {
    return res.status(500).json({ message: 'Telegram bot not configured' });
  }

  const message = `Новая заявка с сайта:\n\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email || 'не указан'}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      }
    );

    if (!response.ok) throw new Error('Ошибка Telegram API');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: error.message });
  }
}
