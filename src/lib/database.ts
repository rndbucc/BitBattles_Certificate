import databaseData from '../../DB/Data_Base.json';

export interface CertificateData {
  "Recipient Name": string;
  "Recipient Email": string;
  "Recipient ID": string;
  "Preview Link": string;
  "Download Link": string;
  "Issue Date": string;
  "Facebook Share": string;
  "LinkedIn Share": string;
}

// Load the database data
const certificates: CertificateData[] = databaseData;

/**
 * Find a certificate by recipient ID
 */
export function findCertificateById(recipientId: string): CertificateData | null {
  return certificates.find(cert => cert["Recipient ID"] === recipientId) || null;
}

/**
 * Get all certificates (for admin purposes)
 */
export function getAllCertificates(): CertificateData[] {
  return certificates;
}

/**
 * Get certificates by date range
 */
export function getCertificatesByDateRange(startDate: Date, endDate: Date): CertificateData[] {
  return certificates.filter(cert => {
    const issueDate = new Date(cert["Issue Date"]);
    return issueDate >= startDate && issueDate <= endDate;
  });
}

/**
 * Get total number of certificates
 */
export function getTotalCertificates(): number {
  return certificates.length;
}

/**
 * Validate if a recipient ID exists
 */
export function isValidRecipientId(recipientId: string): boolean {
  return certificates.some(cert => cert["Recipient ID"] === recipientId);
}
