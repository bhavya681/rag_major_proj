import { useState } from "react";
import { Paperclip, Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const quickReplies = [
  "Tell me a joke",
  "What's the weather like?",
  "How does AI work?",
  "Explain quantum computing",
];

export function InputArea() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 border-t border-border bg-background/50 backdrop-blur-sm shadow-lg">
      {/* Quick Replies Section */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
        {quickReplies.map((reply) => (
          <Button
            key={reply}
            variant="outline"
            size="sm"
            onClick={() => setMessage(reply)}
            className="text-xs px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
            {reply}
          </Button>
        ))}
      </div>

      {/* Message Input Section */}
      <div className="flex items-center gap-2 bg-secondary/50 dark:bg-secondary-dark rounded-full p-3 shadow-md">
        {/* Attach File Button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 hover:bg-muted/20 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Paperclip className="h-6 w-6 text-muted-foreground" />
                <span className="sr-only">Attach file</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Attach file</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Textarea for Message */}
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="InputStuff flex-grow text-sm min-h-[40px] max-h-[200px] resize-none border-0 bg-transparent focus:ring-0 focus:ring-offset-0 placeholder:text-muted-foreground/60"

        />

        {/* Emoji Button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 hover:bg-muted/20 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Smile className="h-6 w-6 text-muted-foreground" />
                <span className="sr-only">Insert emoji</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Insert emoji</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Send Button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleSend}
                className="shrink-0 hover:bg-primary/90 bg-primary text-primary-foreground transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                size="icon"
              >
                <Send className="h-6 w-6" />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Send message</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
