import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 p-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-sky-800">
          Struggling to Attract Clients Online?
        </h1>
        <p className="text-lg text-sky-700 mb-6">
          Your website might be the missing link. Download our free guide: <br />
          <span className="font-semibold">
            "5 Simple Ways a Website Can Grow Your Business" – no tech skills required.
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Card className="bg-white p-6 shadow-xl rounded-2xl max-w-md w-full">
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="text" placeholder="Your Business Type" required />
              <Button className="bg-sky-600 hover:bg-sky-700 text-white text-lg">
                Get My Free Guide
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <p className="text-sm text-sky-500 mt-4">
        We respect your privacy. No spam. Just value.
      </p>
    </div>
  );
                 }
        
