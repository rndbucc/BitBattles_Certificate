import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ShareDialogueProps extends PropsWithChildren {
  trigger: React.JSX.Element;
  open?: boolean;
}

export default function ShareDialogue({
  trigger,
  children,
}: ShareDialogueProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#3a1e10] rounded-lg shadow-lg p-6 border border-[#a06937]">
        <DialogHeader>
          <DialogTitle className="section-title text-center font-kragx mb-4">
            Share Your Certificate
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 text-[#efda9b]">
          {children}
          <div className="text-sm text-center">
            Share your certificate to showcase your achievements with friends
            and colleagues. Choose from the options below:
          </div>
          <ul className="text-sm list-disc pl-4 text-[#e7b980]">
            <li>Share on social media platforms like Facebook or LinkedIn.</li>
            <li>Copy the direct link to send via email or chat.</li>
          </ul>
          <div className="text-[#e7b980]/70 text-xs mt-4">
            Ensure that your certificate details are correct before sharing. For
            any discrepancies, contact support.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}