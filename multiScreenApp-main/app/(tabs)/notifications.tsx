import AlertRow from "@/components/AlertSwitch";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationsScreen() {
  interface alert {
    id: string;
    label: string;
    description?: string;
    enabled: boolean;
  }

  const [message, setMessage] = useState("");
  const [alerts, setAlerts] = useState<alert[]>([
    {
      id: "1",
      label: "New Message",
      description: "You have a new message from John.",
      enabled: true,
    },
    {
      id: "2",
      label: "Update Available",
      description: "A new update is available for download.",
      enabled: true,
    },
    {
      id: "3",
      label: "Payment Received",
      description: "Your payment has been received.",
      enabled: true,
    },
    {
      id: "4",
      label: "Account Activity",
      description: "Your account has been accessed from a new device.",
      enabled: true,
    },
    {
      id: "5",
      label: "Security Alert",
      description: "Unusual activity detected on your account.",
      enabled: true,
    },
    {
      id: "6",
      label: "Newsletter",
      description: "Here's the latest newsletter from our team.",
      enabled: true,
    },
    {
      id: "7",
      label: "Promotional",
      description: "Check out our latest offers and deals.",
      enabled: true,
    },
    {
      id: "8",
      label: "Support Request",
      description: "You have a pending support request.",
      enabled: true,
    },
    {
      id: "9",
      label: "Feedback Request",
      description: "We'd like your feedback about our service.",
      enabled: true,
    },
    {
      id: "10",
      label: "Event Invitation",
      description: "You're invited to an upcoming event.",
      enabled: true,
    },
    {
      id: "11",
      label: "Deadline Reminder",
      description: "Don't forget about the upcoming deadline.",
      enabled: true,
    },
  ]);

  function toggleAlert(id: string) {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, enabled: !alert.enabled } : alert,
      ),
    );
    setMessage("Alert Updated!");
    setTimeout(() => {
      (setMessage(""), 3000);
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      


      <AlertRow
        label="New Message"
        description="You have a new message from John."
        enabled={alerts[0]?.enabled}
        onToggle={() => toggleAlert("1")}
        type="button"
      />
      <AlertRow
        label="Update Available"
        description="A new update is available for download."
        enabled={alerts[1]?.enabled}
        onToggle={() => toggleAlert("2")}
        type="button"
      />
      <AlertRow
        label="Payment Received"
        description="Your payment has been received."
        enabled={alerts[2]?.enabled}
        onToggle={() => toggleAlert("3")}
        type="button"
      />
      <AlertRow
        label="Account Activity"
        description="Your account has been accessed from a new device."
        enabled={alerts[3]?.enabled}
        onToggle={() => toggleAlert("4")}
        type="button"
      />
      <AlertRow
        label="Security Alert"
        description="Unusual activity detected on your account."
        enabled={alerts[4]?.enabled}
        onToggle={() => toggleAlert("5")}
        type="button"
      />
      <AlertRow
        label="Newsletter"
        description="Here's the latest newsletter from our team."
        enabled={alerts[5]?.enabled}
        onToggle={() => toggleAlert("6")}
        type="button"
      />
      <AlertRow
        label="Promotional"
        description="Check out our latest offers and deals."
        enabled={alerts[6]?.enabled}
        onToggle={() => toggleAlert("7")}
        type="switch"
      />
      <AlertRow
        label="Support Request"
        description="You have a pending support request."
        enabled={alerts[7]?.enabled}
        onToggle={() => toggleAlert("8")}
        type="switch"
      />
      <AlertRow
        label="Feedback Request"
        description="We'd like your feedback about our service."
        enabled={alerts[8]?.enabled}
        onToggle={() => toggleAlert("9")}
        type="switch"
      />
      <AlertRow
        label="Event Invitation"
        description="You're invited to an upcoming event."
        enabled={alerts[9]?.enabled}
        onToggle={() => toggleAlert("10")}
        type="switch"
      />
      <AlertRow
        label="Deadline Reminder"
        description="Don't forget about the upcoming deadline."
        enabled={alerts[10]?.enabled}
        onToggle={() => toggleAlert("11")}
        type="switch"
      />
    </SafeAreaView>
  );
}
