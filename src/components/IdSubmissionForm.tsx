"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { LoadingButton } from "./ui/loading-button";

export default function IdSubmissionForm() {
  const [id, setId] = useState("");
  const [pending, setPending] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const response = await fetch("/api/certificate/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipientId: id }),
    });

    if (!response.ok) {
      setPending(false);
      return toast.error("Something went wrong");
    }

    router.push(`/${id}`);
  };
  
  return (
    <form className="flex flex-row w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-4 w-full">
        <label htmlFor="recipientId" className="font-cinzel text-[#efda9b] text-lg font-medium">
          Enter your Recipient ID
        </label>
        <div className="flex w-full gap-2">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            name="recipientId"
            type="text"
            id="recipientId"
            placeholder="Write your ID"
            className="w-full px-4 py-3 rounded-md bg-[#3a1e10]/80 
                       border border-[#a06937] text-[#efda9b]
                       focus:outline-none focus:ring-2 focus:ring-[#a06937]
                       placeholder:text-[#efda9b]/50"
          />
          <LoadingButton
            className="custom-button px-4 py-3"
            loading={pending}
          >
            Submit
          </LoadingButton>
        </div>
      </div>
    </form>
  );
}