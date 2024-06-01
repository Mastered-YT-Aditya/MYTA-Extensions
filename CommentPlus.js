// Name: Comment Plus
// ID: mytacomments
// Description: More Comment Blocks.
// By: Mastered YT Aditya <https://mytaditya.rf.gd/> 
// By: LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/>
// License: MIT AND LGPL-3.0

(function (Scratch) {
  "use strict";

  const menuIconURI =
  "data:image/png;base64,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";

  class CommentPlus {
    getInfo() {
      return {
        id: "mytacomments",
        name: "Comment Plus",
        color1: "#a9e43a",
        color2: "#84b02b",
        color3: "#567419",
        menuIconURI: menuIconURI,
        blocks: [
          {
            opcode: "commentHat",
            blockType: Scratch.BlockType.HAT,
            text: "// [COMMENT]",
            isEdgeActivated: false,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentC",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INPUT] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUT] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentReporterPPP",
            blockType: Scratch.BlockType.REPORTER,
            text: "// [COMMENT] [INPUT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentBooleanPPP",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "// [COMMENT] [INPUT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentReporterPPPP",
            blockType: Scratch.BlockType.REPORTER,
            text: "// [COMMENT] [INPUT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentBooleanPPPP",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "// [COMMENT] [INPUT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentBooleanPlus",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment"
              },
            },
          },
          {
            opcode: "commentReporterPlus",
            blockType: Scratch.BlockType.REPORTER,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment"
              },
            },
          },
          {
            opcode: "commentCap",
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment"
              },
            },
          },
          {
            opcode: "commentCPlus",
            blockType: Scratch.BlockType.CONDITIONAL,
            isTerminal: true,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentReporterPlusPlus",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INPUT] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentBooleanPlusPlus",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUT] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentReporterP6",
            blockType: Scratch.BlockType.REPORTER,
            text: "[COLOR] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#037b03",
              },
            },
          },
          {
            opcode: "commentBooleanP6",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[COLOR] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#037b03",
              },
            },
          },
          {
            opcode: "commentReporterP7",
            blockType: Scratch.BlockType.REPORTER,
            text: "// [COMMENT] [COLOR]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#037b03",
              },
            },
          },
          {
            opcode: "commentBooleanP7",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "// [COMMENT] [COLOR]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#037b03",
              },
            },
          },
          {
            opcode: "commentCPlusPlus",
            blockType: Scratch.BlockType.CONDITIONAL,
            branchCount: 2,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
        ],
      };
    }

    commentHat() {
      // no-op
    }

    commentCap(args) {
      // no-op
    }

    commentCommand() {
      // no-op
    }

    commentC(args, util) {
      return true;
    }

    commentReporter(args) {
      return args.INPUT;
    }

    commentBoolean(args) {
      return args.INPUT || false;
    }

    commentReporterPPP(args) {
      return args.INPUT;
    }

    commentBooleanPPP(args) {
      return args.INPUT || false;
    }

    commentReporterPPPP(args) {
      return args.INPUT || false;
    }

    commentBooleanPPPP(args) {
      return args.INPUT || false;
    }

    commentBooleanPlus(args) {
      // no-op
    }

    commentReporterPlus(args) {
      // no-op
    }

    commentCap() {
      // no-op
    }

    commentCPlus() {
      // no-op
    }
    
    commentReporterPlusPlus(args) {
      return args.INPUT || false;
    }

    commentBooleanPlusPlus(args) {
      return args.INPUT || false;
    }
    
    commentReporterP6(args) {
      return args.COLOR;
    }

    commentBooleanP6(args) {
      return args.COLOR || false;
    }
    
    commentReporterP7(args) {
      return args.COLOR;
    }

    commentBooleanP7(args) {
      return args.COLOR || false;
    }
    
    commentCPlusPlus(args, util) {
      return true;
    }
  }
  Scratch.extensions.register(new CommentPlus());
})(Scratch);
