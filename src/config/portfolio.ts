export interface PortfolioConfig {
  name: string;
  designation: string;
  statusBadge: string;
  cv: {
    fileName: string;
    downloadUrl: string;
    isPlaceholder: boolean;
    notice: string;
  };
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  name: "Thirumurugan S",
  designation: "Final Year B.E. Computer Science and Engineering Student",
  statusBadge: "Available for Opportunities",
  cv: {
    fileName: "Thirumurugan_S_CV_Placeholder.pdf",
    downloadUrl: "/Thirumurugan_S_CV_Placeholder.pdf",
    isPlaceholder: true,
    notice: "A placeholder CV has been downloaded. The system is ready to seamlessly link your official CV PDF as soon as it is added to the repository."
  }
};
