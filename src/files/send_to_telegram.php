<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Отримання даних з форми
	$namePerson = $_POST["name"];
  	$phoneNumber = $_POST["phone"];

	// Налаштування Telegram-бота
	$botToken = "7144450791:AAFnGuYccslwrBJ9QeSEDWFjtc980_n4FGI";
	$chatId = "-4116812677";

	// Формування повідомлення
	$text = "<b>Нове повідомлення Tysha</b>\n";
	$text .= "<b>Iм'я:</b> " . $namePerson . "\n";
	$text .= "<b>Телефон:</b> " . $phoneNumber . "\n";

	// Відправка повідомлення в Telegram
	$url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
	$params = [
		'chat_id' => $chatId,
		'parse_mode' => 'HTML',
		'text' => $text
	];

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);

	if ($response) {
		header("Location: http://tyshahotel.online/thank-you-page.html");
		exit();
	} else {
		header("Location: http://tyshahotel.online/404.html");
		// echo "Error";
	}
}
?>