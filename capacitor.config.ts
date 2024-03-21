import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-test-2",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
