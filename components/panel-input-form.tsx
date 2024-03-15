import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PanelFormSchema } from "@/schemas";
import { useParameterStore } from "@/stores/parameters";

export function PanelForm() {
  const parameters = useParameterStore((state) => state);

  const form = useForm<z.infer<typeof PanelFormSchema>>({
    resolver: zodResolver(PanelFormSchema),
    defaultValues: {
      stc: parameters.stc,
      ptc: parameters.ptc,
      v_mp: parameters.v_mp,
      i_mp: parameters.i_mp,
      v_oc: parameters.v_oc,
      i_sc: parameters.i_sc,
      alpha_sc: parameters.alpha_sc,
      beta_oc: parameters.beta_oc,
      gamma_r: parameters.gamma_r,
      n_s: parameters.n_s,
      temp_ref: parameters.temp_ref,
      length: parameters.length,
      width: parameters.width,
    },
  });

  const setParameters = useParameterStore((state) => state.setParameters);

  async function onSubmit(values: z.infer<typeof PanelFormSchema>) {
    console.log(values);
    setParameters(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-2 grid-rows-6 space-x-1">
          <FormField
            control={form.control}
            name="stc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>STC Max Power</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ptc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PTC Max Power</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="v_mp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Power Voltage</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="i_mp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum power current under STC</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="v_oc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Open circuit voltage under STC</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="i_sc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short circuit current under STC</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alpha_sc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Temperature coefficient short circuit current
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="beta_oc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Temperature coefficient open circuit voltage
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gamma_r"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Temperature coefficient at maximum point</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="n_s"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of panels in series</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="length"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Panel Length</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Panel Width</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="temp_ref"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference Temperature</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 mt-4">
            <Button type="submit" className="w-full">
              Change Parameters
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
