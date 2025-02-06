<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "pentaomnia.com";
$user = "u686932376_parth444";
$password = "Z@11xcvbnm";
$database = "u686932376_parth333";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $stmt = $conn->prepare("INSERT INTO ServiceInquiries (fullName, companyName, email, phoneNumber, projectDescription, budget, startDate, deadline, referralSource, scheduleConsultation, selectedServices) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssss", 
        $data["fullName"], 
        $data["companyName"], 
        $data["email"], 
        $data["phoneNumber"], 
        $data["projectDescription"], 
        $data["budget"], 
        $data["startDate"], 
        $data["deadline"], 
        $data["referralSource"], 
        $data["scheduleConsultation"], 
        $data["selectedServices"]
    );

    if ($stmt->execute()) {
        echo json_encode(["message" => "Success", "insertedId" => $stmt->insert_id]);
    } else {
        echo json_encode(["message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
}

$conn->close();
?>
