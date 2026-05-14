<?php
// submit_enquiry.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON payload"]);
    exit();
}

// Extract fields
$name = isset($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : '';
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : '';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$course = isset($data['course']) ? htmlspecialchars(strip_tags($data['course'])) : '';
$country = isset($data['country']) ? htmlspecialchars(strip_tags($data['country'])) : '';
$state = isset($data['state']) ? htmlspecialchars(strip_tags($data['state'])) : '';
$city = isset($data['city']) ? htmlspecialchars(strip_tags($data['city'])) : '';

// Additional fields if sent from contact form
$message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : '';
$subject = isset($data['subject']) ? htmlspecialchars(strip_tags($data['subject'])) : 'New Enquiry from Medverz Website';

if (empty($name) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name, Phone, and Email are required"]);
    exit();
}

$to = "mohitmali411@gmail.com";
$email_subject = $subject . " - " . $name;

// Email Content (HTML)
$htmlContent = "
<html>
<head>
  <title>New Enquiry Details</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; margin: 0 auto; }
    h2 { color: #0056b3; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 10px; border-bottom: 1px solid #eee; text-align: left; }
    th { width: 30%; color: #555; }
  </style>
</head>
<body>
  <div class='container'>
    <h2>New Website Enquiry</h2>
    <p>You have received a new lead from the Medverz website. Details are below:</p>
    <table>
      <tr><th>Name</th><td>{$name}</td></tr>
      <tr><th>Email</th><td>{$email}</td></tr>
      <tr><th>Phone</th><td>{$phone}</td></tr>
      <tr><th>Course</th><td>{$course}</td></tr>
      <tr><th>Country</th><td>{$country}</td></tr>
      <tr><th>State</th><td>{$state}</td></tr>
      <tr><th>City</th><td>{$city}</td></tr>
      " . (!empty($message) ? "<tr><th>Message</th><td>" . nl2br($message) . "</td></tr>" : "") . "
    </table>
  </div>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Set From header to a valid domain to reduce spam
$serverName = isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] !== 'localhost' ? $_SERVER['SERVER_NAME'] : 'medverzeducation.com';
$headers .= "From: Medverz Website <noreply@{$serverName}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = @mail($to, $email_subject, $htmlContent, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Enquiry sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email. Please check server mail configuration."]);
}
?>
