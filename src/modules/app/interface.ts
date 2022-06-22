export interface ICreateAppInput {
  name: string;
  splashScreenPictureURL: string;
  splashScreenColor: string;
  landingLogoURL: string;
  landingPictureURL: string;
  landingTitle: string;
  iconURL: string;
  iconColor: string;
  iconName: string;
  primaryColor: string;
  secondaryColor: string;
  allowRegistrations: boolean;
  removeHQLabel: boolean;
  enableISOBuild: boolean;
  enableIOSDeployment: boolean;
  enableAndroidBuild: boolean;
  enableAndroidDeployment: boolean;
  category: AppCategory;
}

export type AppCategory = "couriers" | "retailers" | "platforms";
