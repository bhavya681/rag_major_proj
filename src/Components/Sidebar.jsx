import { Folder, Plus, Settings, ChevronLeft } from 'lucide-react';
import { Button } from './ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { ScrollArea } from './ui/scroll-area';

export function Sidebar({ selectedFolder, onSelectFolder, isOpen }) {
  const folders = ['General', 'Work', 'Personal', 'Ideas', 'Projects', 'Archive'];

  return (
    <div
      className={`
        fixed lg:relative
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-72 lg:w-80
        h-full
        bg-background/80 dark:bg-background/90
        backdrop-blur-lg
        border-r border-border/40
        shadow-lg
        transition-transform duration-300 ease-in-out
        z-50
      `}
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col h-full p-6">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl mt-12 font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Rag Model
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-muted"
            onClick={() => onSelectFolder(null)}
          >
            {/* <ChevronLeft className="h-5 w-5" /> */}
          </Button>
        </div>

        {/* New Chat Button */}
        <Button
          className="mb-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          <Plus className="mr-2 h-4 w-4" /> New Chat
        </Button>

        {/* Folder List */}
        <ScrollArea className="flex-grow -mx-2">
          <div className="space-y-1 px-2">
            {folders.map((folder) => (
              <Button
                key={folder}
                variant={selectedFolder === folder ? "secondary" : "ghost"}
                className={`
                  w-full justify-start
                  ${selectedFolder === folder ? 'bg-muted/80 font-medium' : 'hover:bg-muted/50'}
                  transition-all duration-200
                `}
                onClick={() => onSelectFolder(folder)}
              >
                <Folder
                  className={`
                    mr-2 h-4 w-4
                    ${selectedFolder === folder ? 'text-blue-500' : ''}
                    transition-colors duration-200
                  `}
                />
                {folder}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
