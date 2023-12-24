import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Send, Users } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Bold, Italic, Underline } from "lucide-react";

const formSchema = z.object({
  commentId: z.string(),
  creatorId: z.string(),
  streamitemId: z.string(),
  classId: z.string(),
  comment: z.string(),
});

const CommentArea = () => {
  const [dmCount, setDmCount] = useState();
  const [commentItems, setCommentItems] = useState([
    {
      commentId: "1203",
      creatorId: "12e01d",
      classId: "12",
      streamitemId: "1212e",
      comment: "Hello this is for testing",
    },
    {
      commentId: "1203",
      creatorId: "12e01d",
      classId: "12",
      streamitemId: "1212e",
      comment: "Hello this is for testing",
    },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      commentId: "",
      creatorId: "",
      streamitemId: "",
      classId: "",
      comment: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="comment-container">
      <div className="comment-count">
        <Users className="h-5 w-5" />
        {commentItems.length === 0 ? <></> : <>{commentItems.length}</>}
        class comment
      </div>

      {/* {commentItems.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="comment-show"></div>
        </>
      )} */}
      <div className="comment-show">
        {commentItems.map(
          ({ commentId, classId, streamitemId, creatorId, comment }) => (
            <div key={commentId} className="flex flex-row items-center mt-3">
              <Avatar className="h-[2rem] w-[2rem] cmtbavt">
                <AvatarImage className="object-cover" />
                <AvatarFallback className="bg-[#3e9e3e]"></AvatarFallback>
              </Avatar>
              <div className="cmtmain">
                <div className="cmtlabel text-[14px]">
                  Luu Minh Phat - <span className="text-[12px] text-gray-600">Dec 24</span>
                </div>
                <div className="cmtcontent text-[13px] text-gray-700">
                  {comment}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="comment-box">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="comment-box-wrapper"
          >
            <Avatar className="h-[2rem] w-[2rem] cmtbavt">
              <AvatarImage className="object-cover" />
              <AvatarFallback className="bg-[#3e9e3e]"></AvatarFallback>
            </Avatar>
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="comment-chatbox">
                  <FormControl className="min-h-[20px]">
                    <Textarea
                      placeholder="Add class comment"
                      className="chatbox"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="chatbox-send top-[-1.5rem]"
            >
              <Send />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CommentArea;
