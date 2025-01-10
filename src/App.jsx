import React, { useState } from 'react';
import { Sidebar } from './Components/Sidebar';
import { ChatArea } from './Components/ChatArea';
import { InputArea } from './Components/InputArea';
import { ThemeProvider } from './Components/ThemeProvider';
import { ThemeToggle } from './Components/ThemeToggle';
import { Button } from './Components/ui/Button';
import { Menu, ChevronLeft } from 'lucide-react';

export default function ChatInterface() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed by default

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex h-screen bg-background text-foreground">
        {/* Sidebar */}
        <Sidebar
          selectedFolder={selectedFolder}
          onSelectFolder={setSelectedFolder}
          isOpen={sidebarOpen}
        />

        {/* Main Content */}
        <div className="flex flex-col flex-grow">
          {/* Header */}
          <div className="p-4 flex justify-between items-center border-b border-border">
            {/* Sidebar Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="z-50 lg:hidden"
              aria-label="Toggle Sidebar"
              aria-expanded={sidebarOpen}
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Chat Area */}
          <ChatArea selectedFolder={selectedFolder} />

          {/* Input Area */}
          <InputArea />
        </div>
      </div>
    </ThemeProvider>
  );
}
