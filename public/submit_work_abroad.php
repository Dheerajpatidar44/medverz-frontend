<?php
// submit_work_abroad.php
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
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : '';
$country = isset($data['country']) ? htmlspecialchars(strip_tags($data['country'])) : '';
$state = isset($data['state']) ? htmlspecialchars(strip_tags($data['state'])) : '';
$city = isset($data['city']) ? htmlspecialchars(strip_tags($data['city'])) : '';
$preferredCountry = isset($data['preferredCountry']) ? htmlspecialchars(strip_tags($data['preferredCountry'])) : '';
$planTime = isset($data['planTime']) ? htmlspecialchars(strip_tags($data['planTime'])) : '';
$consent = isset($data['consent']) && $data['consent'] ? 'Yes' : 'No';

if (empty($name) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name, Phone, and Email are required"]);
    exit();
}

$to = "sumitkumarsahu141@gmail.com";
$email_subject = "New Work Abroad Enquiry - " . $name;

// Email Content (HTML)
$htmlContent = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>New Work Abroad Enquiry</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f4f7f6;
      margin: 0;
      padding: 0;
    }
    .wrapper {
      background-color: #f4f7f6;
      padding: 30px 15px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      border: 1px solid #e1e8ed;
    }
    .header {
      background: linear-gradient(135deg, #0a8ba9 0%, #7cb94c 100%);
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .header p {
      color: rgba(255, 255, 255, 0.9);
      margin: 5px 0 0 0;
      font-size: 14px;
    }
    .content {
      padding: 35px;
    }
    .welcome-text {
      font-size: 16px;
      color: #4a5568;
      margin-bottom: 25px;
    }
    .detail-table {
      width: 100%;
      border-collapse: collapse;
    }
    .detail-table th, .detail-table td {
      padding: 14px 16px;
      border-bottom: 1px solid #edf2f7;
      text-align: left;
    }
    .detail-table th {
      width: 38%;
      color: #718096;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .detail-table td {
      color: #2d3748;
      font-weight: 500;
      font-size: 15px;
    }
    .detail-table tr:last-child th, .detail-table tr:last-child td {
      border-bottom: none;
    }
    .footer {
      background-color: #fafbfc;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #edf2f7;
    }
    .footer p {
      margin: 0;
      color: #a0aec0;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class='wrapper'>
    <div class='container'>
      <div class='header'>
        <h1>Work Abroad Enquiry</h1>
        <p>Medverz Education Overseas Recruitment</p>
      </div>
      <div class='content'>
        <p class='welcome-text'>Hello, you have received a new consultation request from the Work Abroad page. Here are the applicant's details:</p>
        <table class='detail-table'>
          <tr>
            <th>Full Name</th>
            <td>{$name}</td>
          </tr>
          <tr>
            <th>Email Address</th>
            <td><a href='mailto:{$email}' style='color: #0a8ba9; text-decoration: none;'>{$email}</a></td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td><a href='tel:{$phone}' style='color: #0a8ba9; text-decoration: none;'>{$phone}</a></td>
          </tr>
          <tr>
            <th>Home Country</th>
            <td>{$country}</td>
          </tr>
          <tr>
            <th>Home State</th>
            <td>{$state}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{$city}</td>
          </tr>
          <tr>
            <th>Preferred Country to Work In</th>
            <td>{$preferredCountry}</td>
          </tr>
          <tr>
            <th>Plan to go abroad</th>
            <td>{$planTime}</td>
          </tr>
          <tr>
            <th>Consent Given</th>
            <td>{$consent}</td>
          </tr>
        </table>
      </div>
      <div class='footer'>
        <p>This is an automated notification from Medverz Education.</p>
      </div>
    </div>
  </div>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Set From header to a valid domain to reduce spam
$serverName = isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] !== 'localhost' ? $_SERVER['SERVER_NAME'] : 'medverzeducation.com';
$headers .= "From: Medverz Work Abroad <noreply@{$serverName}>\r\n";
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
