import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { jobPostSchema } from "@/lib/schemas";

export function PostJobForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(jobPostSchema),
    defaultValues: { /* ... */ }
  });

  async function onSubmit(values: z.infer<typeof jobPostSchema>) {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        body: JSON.stringify(values)
      });
      
      if (!response.ok) throw new Error();
      
      toast({
        title: "Job posted successfully!",
        description: "Tradespeople will now see your job"
      });
      
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please check your details",
        variant: "destructive"
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Existing form fields */}
        <Button type="submit">Post Job</Button>
      </form>
    </Form>
  );
}