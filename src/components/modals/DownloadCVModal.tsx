
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { toast } from '@/components/ui/use-toast';

interface DownloadCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cvFiles = {
  en: '/cv/christian-rg-cv-en.pdf',
  es: '/cv/christian-rg-cv-es.pdf',
} as const;

export const DownloadCVModal = ({ isOpen, onClose }: DownloadCVModalProps): JSX.Element => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (language: keyof typeof cvFiles) => {
    try {
      setIsDownloading(true);
      const response = await fetch(cvFiles[language]);
      
      if (!response.ok) {
        throw new Error('Failed to download CV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `christian-rg-cv-${language}.pdf`;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      
      toast({
        title: "Success",
        description: "CV downloaded successfully",
      });
      
      onClose();
    } catch (error) {
      console.error('Error downloading CV:', error);
      toast({
        title: "Error",
        description: "Failed to download CV. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download CV</DialogTitle>
          <DialogDescription>
            Select your preferred language to download the CV
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <Button
            onClick={() => handleDownload('en')}
            disabled={isDownloading}
            className="w-full"
          >
            <span className="mr-2">🇺🇸</span>
            English
          </Button>
          <Button
            onClick={() => handleDownload('es')}
            disabled={isDownloading}
            className="w-full"
          >
            <span className="mr-2">🇪🇸</span>
            Español
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
